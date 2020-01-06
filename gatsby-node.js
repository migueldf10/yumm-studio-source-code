const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const moment = require('moment')
const _ = require('lodash')
const slugify = require('slugify')

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'Mdx') {
		//LANGUAGE OPERATIONS
		// in case lang is not defined, go to default
		let language = 'en'
		if (node.frontmatter.language) {
			language = node.frontmatter.language
		}
		//TYPE OPERATIONS
		// in case type is not defined, go to default
		let type = 'article'
		if (node.frontmatter.type) {
			// default type,
			type = node.frontmatter.type
		}

		//SLUG OPERATIONS
		// default slug will be filename
		let value = createFilePath({
			node,
			getNode,
		})
		// in case a custom slug exists in frontmatter
		if (node.frontmatter.slug) {
			value =
				'/' +
				slugify(node.frontmatter.slug, {
					replacement: '-', // replace spaces with replacement
					remove: /[*+~.()'"!:@]/g, // regex to remove characters
					lower: true, // result in lower case
				})
		}

		//URL OPERATIONS
		// only include langkey for not predef lang
		let langKey = ''
		if (language !== 'en') {
			langKey = '/' + language
		}
		// remove type in url for pages.
		let typeKey = ''
		if (type !== 'page') {
			typeKey = '/' + type
		}
		let url = langKey + typeKey + value

		createNodeField({
			name: 'slug',
			node,
			value: `${url}`,
		})
		createNodeField({
			name: 'type',
			node,
			value: `${type}`,
		})
		createNodeField({
			name: 'language',
			node,
			value: `${language}`,
		})

		const date = moment(node.frontmatter.date, 'DD/MM/YYYY')
		if (!date.isValid) {
			console.warn(`WARNING: Invalid date.`, node.frontmatter)
		}

		createNodeField({
			node,
			name: 'date',
			value: date.toISOString(),
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	// Destructure the createPage function from the actions object
	const { createPage } = actions
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
							type
						}
						frontmatter {
							slug
							type
						}
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild(
			'🚨  ERROR: Loading "createPages" query'
		)
	}
	// Create blog post pages.
	const posts = result.data.allMdx.edges

	// you'll call `createPage` for each result
	posts.forEach(({ node }, index) => {
		//populating Tag Set

		let template
		switch (node.fields.type) {
			case 'article':
				template = `./src/templates/posts-page-layout.js`
				break
			case 'page':
				template = `./src/templates/pages-page-layout.js`
				break
		}
		createPage({
			// This is the slug you created before
			path: node.fields.slug,
			// This component will wrap our MDX content
			component: path.resolve(template),
			// You can use the values in this context in
			// our page layout component
			context: {
				id: node.id,
				type: node.fields.type,
			},
		})
	})
}

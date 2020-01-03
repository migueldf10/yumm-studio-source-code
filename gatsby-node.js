const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	// you only want to operate on `Mdx` nodes. If you had content from a
	// remote CMS you could also check to see if the parent node was a
	// `File` node here

	if (node.internal.type === 'Mdx') {
		// default slug will be filename
		let value = createFilePath({
			node,
			getNode,
		})
		// in case a custom slug exists in frontmatter
		if (node.frontmatter.slug) {
			value = '/' + node.frontmatter.slug
		}
		// We create node values for futher operations.

		if (!node.frontmatter.type) {
			// default type,
			node.frontmatter.type = 'article'
		}
		createNodeField({
			name: 'slug',
			node,
			value: `${value}`,
		})
		createNodeField({
			name: 'type',
			node,
			value: node.frontmatter.type,
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

// In order to use relative paths from programmaticly created MDX files
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"]
//     }
//   });
// };

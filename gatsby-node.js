const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	// you only want to operate on `Mdx` nodes. If you had content from a
	// remote CMS you could also check to see if the parent node was a
	// `File` node here

	if (node.internal.type === 'Mdx') {
		let value = createFilePath({
			node,
			getNode,
		})
		if (node.frontmatter.slug) {
			value = '/' + node.frontmatter.slug
		}

		if (node.frontmatter.type === 'page') {
			createNodeField({
				// Name of the field you are adding
				name: 'slug',
				// Individual MDX node
				node,
				value: `${value}`,
			})
		} else {
			if (node.frontmatter.type === 'article') {
				createNodeField({
					// Name of the field you are adding
					name: 'slug',
					// Individual MDX node
					node,
					value: `/articles${value}`,
				})
			}
		}
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
						}
						frontmatter {
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
		createPage({
			// This is the slug you created before
			// (or `node.frontmatter.slug`)
			path: node.fields.slug,
			// This component will wrap our MDX content
			component: path.resolve(
				`./src/templates/posts-page-layout.js`
			),
			// You can use the values in this context in
			// our page layout component
			context: { id: node.id },
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

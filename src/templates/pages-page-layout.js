import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'

export default function PageTemplate({ data: { mdx } }) {
	return (
		<Layout>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query PagesTemplateQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
			fields {
				slug
			}
		}
	}
`

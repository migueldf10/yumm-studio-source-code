import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

export default function PageTemplate({ data: { mdx } }) {
	let disqusConfig = {
		url: `${'https://yumm.studio' + mdx.fields.slug}`,
		identifier: mdx.id,
		title: mdx.frontmatter.title,
	}
	console.log(mdx)

	return (
		<Layout>
			<h1>{mdx.frontmatter.title}</h1>
			<MDXRenderer>{mdx.body}</MDXRenderer>

			<CommentCount config={disqusConfig} placeholder={'...'} />
			<Disqus config={disqusConfig} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
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

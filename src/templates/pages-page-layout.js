import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

export default function PageTemplate({ data: { mdx } }) {
	const { fields, frontmatter } = mdx
	const { seo_title, seo_description, miniature } = frontmatter
	const { slug } = fields

	let miniatureUrl = null
	if (miniature) {
		miniatureUrl = miniature.childImageSharp.fixed.src
	}
	const seoData = {
		title: seo_title,
		description: seo_description,
		url: slug,
		miniatureUrl: miniatureUrl,
	}
	return (
		<Layout>
			<SEO seoData={seoData} />
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
				tags
				seo_title
				seo_description
				miniature {
					childImageSharp {
						fixed(width: 1200) {
							src
						}
					}
				}
			}
			fields {
				slug
			}
		}
	}
`

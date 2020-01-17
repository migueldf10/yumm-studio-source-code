import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import styled from 'styled-components'
import Link from 'gatsby-link'
import SEO from '../components/seo'
import Share from '../components/share'
import theme from '../theme/variables'

const PostIntro = styled.div`
	padding-top: 50vh;
	min-height: 90vh;
	text-align: center;
	h1 {
		text-align: inherit;
		font-weight: 400;
	}
	.tags {
		margin: 0px;
		li {
			list-style: none;
			text-transform: uppercase;
			font-size: 0.7em;
			font-weight: 900;
			display: inline-block;
			margin: 6px 8px;
			padding: 4px 8px;
			border: 1px solid ${theme.colorGray};
		}
		a {
			color: ${theme.colorGray};
			text-decoration: none;
		}
	}
`
const PostSumUp = styled.div`
	/* Alignment  */
	margin: 0px;
	padding: 32px;
	text-align: left;
	ul {
		margin: 0;
	}

	@media screen and (min-width: ${theme.bpDesktop}) {
		margin: 48px;
		padding: 48px;
	}

	/* Visuals */
	border-radius: 10px;
	background: rgb(255, 12, 41);
	color: white;
	background: linear-gradient(
		137deg,
		rgba(255, 32, 62, 10) 0%,
		rgba(255, 93, 29, 1) 62%,
		rgba(218, 33, 33, 1) 100%
	);

	/* Internal */
	.intro {
		font-size: 0.8em;
	}
	.heading {
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: 400;
		display: block;
		margin: 16px 0px;
	}

	.sumup-item {
		list-style: bullet;
		font-size: 0.9em;
		font-weight: 300;

		&.depth-1,
		&.depth-2 {
			list-style: none;
			font-size: 1em;
			font-weight: 700;
		}
		&.depth-3 {
			margin-left: 32px;
			font-weight: 400;
		}
		&.depth-4 {
			margin-left: 48px;
			list-style: circle;
		}
		&.depth-5,
		&.depth-6 {
			display: none;
		}
	}

	@media screen and (min-width: ${theme.bpDesktop}) {
		.sumup-item {
			&.depth-3 {
				margin-left: 48px;
			}
			&.depth-4 {
				margin-left: 64px;
			}
			&.depth-5 {
				display: none;
			}
		}
	}
`
export default function PageTemplate({ data: { post } }) {
	const { id, body, frontmatter, fields, headings } = post
	const {
		title,
		tags,
		seo_title,
		seo_description,
		description,
		miniature,
	} = frontmatter
	const { slug } = fields

	let disqusConfig = {
		url: `${'https://yumm.studio' + slug}`,
		identifier: id,
		title: title,
	}

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
			<PostIntro height={60}>
				{tags && (
					<ul className="tags">
						{tags.map((tag, index) => (
							<li key={index}>
								<Link to={'/stories?filter=' + tag}>
									#{tag}
								</Link>
							</li>
						))}
					</ul>
				)}
				<h1>{title}</h1>
				<PostSumUp>
					{description && (
						<>
							<span className="heading">
								What we will talk about:
							</span>
							<span className="intro">
								{description}
							</span>
						</>
					)}

					<span className="heading">Index:</span>
					<ul>
						{headings.map((item, index) => (
							<li
								key={index}
								className={
									'sumup-item depth-' + item.depth
								}
							>
								{item.value}
							</li>
						))}
					</ul>
				</PostSumUp>
			</PostIntro>
			<div>
				<MDXRenderer>{body}</MDXRenderer>
			</div>
			<Share data={seoData} />
			<CommentCount config={disqusConfig} placeholder={'...'} />
			<Disqus config={disqusConfig} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query PostsTemplateQuery($id: String) {
		post: mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				description
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
			headings {
				depth
				value
			}
			fields {
				slug
			}
		}
	}
`

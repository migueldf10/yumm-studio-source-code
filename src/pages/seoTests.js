import React from 'react'
import styled from 'styled-components'
const Table = styled.table`
	&,
	th,
	td {
		border: 1px solid black;
		border-collapse: collapse;
		padding: 10px;
		white-space: nowrap;
	}
	td {
		/* background-color: blue; */
	}
`

export default class extends React.Component {
	render() {
		const List = this.props.data.posts.edges.map(
			(edge, index) => (
				<tr>
					<td>{index + 1}</td>
					<td>{edge.node.frontmatter.title}</td>
					<td>
						{edge.node.frontmatter.title.length}
						{edge.node.frontmatter.title.length > 60
							? ' - BAD'
							: ' - ok'}
					</td>
					<td>{edge.node.frontmatter.type}</td>
					<td>{edge.node.fields.slug}</td>
					<td>{edge.node.frontmatter.seo_title}</td>
					<td>{edge.node.frontmatter.seo_description}</td>
					<td>{edge.node.frontmatter.language}</td>
					<td>{edge.node.frontmatter.date}</td>
					<td>{edge.node.frontmatter.tags}</td>
					<td>{edge.node.frontmatter.description}</td>
					<td>
						{edge.node.frontmatter.miniature
							? edge.node.frontmatter.miniature
									.relativePath
							: null}
					</td>
					<td>{edge.node.frontmatter.state}</td>
				</tr>
			)
		)
		return (
			<Table>
				<tr>
					<th>nr</th>
					<th>title</th>
					<th>title ev</th>
					<th>type</th>
					<th>slug</th>
					<th>seo_title</th>
					<th>seo_description</th>
					<th>language</th>
					<th>date</th>
					<th>tags</th>
					<th>description</th>
					<th>miniature.relativePath</th>
					<th>state</th>
				</tr>
				{List}
			</Table>
		)
	}
}

export const seoTestsQuery = graphql`
	query seoTestsQuery {
		posts: allMdx(
			filter: { frontmatter: { type: { eq: "article" } } }
			sort: { fields: [frontmatter___type], order: [ASC] }
		) {
			edges {
				node {
					wordCount {
						words
					}
					fields {
						slug
						type
						language
						date
						__typename
					}
					frontmatter {
						title
						type
						slug
						seo_title
						seo_description
						language
						date
						tags
						description
						miniature {
							relativePath
						}
						state
					}
				}
			}
		}
		pages: allMdx(
			filter: { frontmatter: { type: { eq: "page" } } }
			sort: { fields: [frontmatter___type], order: [ASC] }
		) {
			edges {
				node {
					wordCount {
						words
					}
					fields {
						slug
						type
						language
						date
						__typename
					}
					frontmatter {
						title
						type
						slug
						seo_title
						seo_description
						language
						date
						tags
						description
						miniature {
							relativePath
						}
						state
					}
				}
			}
		}
	}
`

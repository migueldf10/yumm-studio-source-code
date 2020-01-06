import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout/layout'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import styled from 'styled-components'

export const tagPageQuery = graphql`
	query tagssTemplateQuery($id: String) {
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

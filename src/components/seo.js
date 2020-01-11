import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, url, miniatureUrl }) {
	const { site, file } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
				file(base: { eq: "default-miniature.png" }) {
					sourceInstanceName
					base
					publicURL
				}
			}
		`
	)

	const metaDescription =
		description || site.siteMetadata.description
	const fullUrl = site.siteMetadata.siteUrl + url

	const miniaturePublicUrl = miniatureUrl || file.publicURL

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: fullUrl,
				},
				// <meta property="og:image" content={imgUrl} />
				{
					property: `og:image`,
					content: miniaturePublicUrl,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		>
			<link rel="canonical" href={fullUrl} />
		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO

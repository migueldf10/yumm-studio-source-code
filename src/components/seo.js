import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ seoData }) {
	const {
		description = '',
		lang = '',
		meta = '',
		title,
		url = '',
		miniatureUrl = '',
	} = seoData

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
	const seoTitle = title || site.siteMetadata.title

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={seoTitle}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		>
			<link rel="canonical" href={fullUrl} />
			<meta name="description" content={metaDescription} />
			<meta name="og:title" content={seoTitle} />
			<meta name="og:description" content={metaDescription} />
			<meta name="og:url" content={fullUrl} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={fullUrl} />
			<meta name="og:image" content={miniaturePublicUrl} />
			<meta
				name="twitter:description"
				content={metaDescription}
			/>
			<meta name="twitter:title" content={seoTitle} />
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:creator"
				content={site.siteMetadata.author}
			/>
			<meta
				name="p:domain_verify"
				content="9d3248d335f55fc48e42d3a87ffa60b2"
			/>
		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	// meta: [],
	// description: ``,
}

SEO.propTypes = {
	seoData: PropTypes.object,
	// description: PropTypes.string,
	// lang: PropTypes.string,
	// meta: PropTypes.arrayOf(PropTypes.object),
	// title: PropTypes.string,
}

export default SEO

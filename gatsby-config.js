const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Yumm Studio Source Code',
		description:
			'A self contained B2B webpage, with all the real code you see in our website, https://yumm.studio.',
		author: '@migueldf10',
		siteUrl: 'https://yumm.studio',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: path.resolve(
						'./src/components/posts-page-layout.js'
					),
				},
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/data/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/data/posts`,
			},
		},

		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `yumm-studio`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-default-mdx-basic',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}

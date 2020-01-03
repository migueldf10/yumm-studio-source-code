import React from 'react'
var slugify = require('slugify')

export default class LinkedinShareLink extends React.Component {
	componentDidMount() {}
	render() {
		const {
			url = 'https://yumm.studio',
			title = 'Yumm Studio, a transparent online business WIP',
			summary = 'Learn from our process while we do it with our doors open',
			source = '=LinkedIn',
		} = this.props

		const shareUrl =
			'https://www.linkedin.com/shareArticle?mini=true&url=' +
			url +
			'&title=' +
			slugify(title) +
			'&summary=' +
			slugify(summary) +
			'&source' +
			slugify(source)

		return <a href={shareUrl}>Share on LinkedIn</a>
	}
}

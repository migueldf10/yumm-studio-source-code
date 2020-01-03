import React from 'react'

export default class FacebookLikeButton extends React.Component {
	componentDidMount() {
		const script = document.createElement('script')
		script.src =
			'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v5.0&appId=208712986165897&autoLogAppEvents=1'
		script.async = true
		document.body.appendChild(script)
	}
	render() {
		const {
			url = 'https://facebook.com/yumm.studio',
			layout = 'button',
		} = this.props
		return (
			<div
				className="fb-like"
				data-href={url}
				data-width=""
				data-layout={layout}
				data-action="like"
				data-size="large"
				data-share="false"
			/>
		)
	}
}

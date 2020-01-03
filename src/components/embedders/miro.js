import React from 'react'

export default class MiroBoard extends React.Component {
	componentDidMount() {}
	render() {
		const { url } = this.props
		return (
			<iframe
				width="640"
				height="360"
				src={url}
				frameborder="0"
				scrolling="no"
				allowfullscreen
			/>
		)
	}
}

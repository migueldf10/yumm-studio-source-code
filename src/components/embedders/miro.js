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
				frameBorder="0"
				scrolling="no"
				title="Miro board embed"
				allowFullScreen
			/>
		)
	}
}

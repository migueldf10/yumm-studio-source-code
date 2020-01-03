import React from 'react'

export default class GoogleDataStudioReport extends React.Component {
	componentDidMount() {}
	render() {
		const { url } = this.props
		return (
			<iframe
				width="600"
				height="800"
				title="Google Data Studio panel"
				src={url}
				frameBorder="0"
				aria-label="Google data studio"
				style={{ border: '0' }}
				allowFullScreen
			></iframe>
		)
	}
}

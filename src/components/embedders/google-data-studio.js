import React from 'react'

export default class GoogleDataStudioReport extends React.Component {
	componentDidMount() {}
	render() {
		const { url } = this.props
		return (
			<iframe
				width="600"
				height="800"
				src={url}
				frameborder="0"
				style={{ border: '0' }}
				allowfullscreen
			></iframe>
		)
	}
}

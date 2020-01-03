import React from 'react'

export default class AirtableView extends React.Component {
	componentDidMount() {}
	render() {
		const { url } = this.props
		return (
			<iframe
				className="airtable-embed"
				src={url}
				frameBorder="0"
				width="100%"
				height="533"
				title="Airtable embeded view"
				style={{
					background: 'transparent',
					border: '1px solid #ccc',
				}}
			></iframe>
		)
	}
}

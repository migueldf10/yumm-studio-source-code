import React from 'react'

export default class AirtableView extends React.Component {
	componentDidMount() {}
	render() {
		const { url } = this.props
		return (
			<iframe
				class="airtable-embed"
				src={url}
				frameborder="0"
				onmousewheel=""
				width="100%"
				height="533"
				style={{
					background: 'transparent',
					border: '1px solid #ccc',
				}}
			></iframe>
		)
	}
}

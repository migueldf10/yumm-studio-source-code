import React from 'react'
import theme from '../../theme/variables'
export default class FigmaEmbed extends React.Component {
	constructor(props) {
		super(props)
		// Don't call this.setState() here!
		this.state = { windowWith: 0 }
	}
	componentDidMount() {
		this.setState((state, props) => {
			return { windowWith: window.innerWidth }
		})
	}
	render() {
		const { url } = this.props
		return (
			<iframe
				style={{
					maxWidth: theme.contentMaxWidth,
					width: this.state.windowWith,
				}}
				width="800"
				height="450"
				src={url}
				allowFullScreen
			></iframe>
		)
	}
}

import React from 'react'

export class FollowOnPinterest extends React.Component {
	componentDidMount() {
		const script = document.createElement('script')
		script.src = '//assets.pinterest.com/js/pinit.js'
		script.async = true
		document.body.appendChild(script)
	}
	render() {
		return (
			<a
				href="https://www.pinterest.com/yummstudio/"
				data-pin-do="buttonFollow"
			>
				<span>Follow us on Pinterest @YummStudio</span>
			</a>
		)
	}
}

export class PinterestBoard extends React.Component {
	constructor(props) {
		super(props)
		// Don't call this.setState() here!
		this.state = { windowWith: 0 }
	}
	componentDidMount() {
		const script = document.createElement('script')
		script.src = '//assets.pinterest.com/js/pinit.js'
		script.async = true
		document.body.appendChild(script)

		this.setState((state, props) => {
			return { windowWith: window.innerWidth }
		})
	}
	render() {
		const { url } = this.props
		return (
			<div
				style={{
					minWidth: this.state.windowWith,
					width: '100vw',
					position: 'relative',
					left: '50%',
					right: '50%',
					marginLeft: '-50vw',
					marginRight: '-50vw',
					textAlign: 'center',
				}}
			>
				<a
					data-pin-do="embedBoard"
					data-pin-board-width="1200"
					data-pin-scale-height="800"
					data-pin-scale-width="220"
					href={url}
				>
					See our Pin Board
				</a>
			</div>
		)
	}
}

import React from 'react'

export default class TextToImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			img: '',
		}
	}

	componentDidMount() {
		let canvasTxt = document
			.getElementById('canvasComponent')
			.getContext('2d')
		console.log(canvasTxt)
		//load font

		canvasTxt.canvas.width = 1200
		canvasTxt.canvas.height = 628

		// Create a linear gradient
		// The start gradient point is at x=20, y=0
		// The end gradient point is at x=220, y=0
		var gradient = canvasTxt.createLinearGradient(
			20,
			20,
			1200,
			628
		)

		// Add three color stops
		gradient.addColorStop(0, 'green')
		gradient.addColorStop(0.5, 'cyan')
		gradient.addColorStop(1, 'green')
		// Set the fill style and draw a rectangle
		canvasTxt.fillStyle = gradient
		canvasTxt.fillRect(0, 0, 1200, 628)
		canvasTxt.font = '50px serif'
		canvasTxt.fillText(this.props.name, 200, 200)
		this.setState({
			img: canvasTxt.canvas.toDataURL(),
		})
	}

	render() {
		return (
			<div>
				<canvas
					id="canvasComponent"
					style={{
						display: 'none',
						width: '1200px',
						height: '628px',
					}}
				></canvas>
				{this.state.img.length > 0 ? (
					<img id="imageComponent" src={this.state.img} />
				) : null}
			</div>
		)
	}
}

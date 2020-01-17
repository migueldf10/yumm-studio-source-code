import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/variables'
const HeroContainer = styled.div`
	min-height: 100vh;
	padding-top: 200px;
	.content {
		margin-bottom: 200px;
	}
	h1,
	h2,
	h3,
	.h1,
	.h2,
	.h3 {
		font-size: 3em;
	}
	.subtitle {
		font-size: 1.5em;
	}

	@media screen and (max-width: ${theme.bpMobileMini}) {
		font-size: 1em;
	}
	@media screen and (min-width: ${theme.bpDesktop}) {
		h1,
		h2,
		h3,
		.h1,
		.h2,
		.h3 {
			font-size: 4.5em;
		}
	}
`
export default class HeroSection extends React.Component {
	constructor(props) {
		super(props)
		// Don't call this.setState() here!
		this.state = { windowHeight: 0 }
	}
	componentDidMount() {
		this.setState((state, props) => {
			return { windowHeight: window.innerHeight }
		})
	}
	render() {
		const {
			children,
			// type = 'default',
			// bg = 'none',
			height = '100',
		} = this.props
		return (
			<HeroContainer
				style={{
					minHeight:
						(this.state.windowHeight * height) / 100,
				}}
			>
				<div className="content">{children}</div>
			</HeroContainer>
		)
	}
}

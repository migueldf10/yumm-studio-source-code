import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
	min-height: 100vh;
	padding-top: 200px;
	.content {
		margin-bottom: 0px;
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
			type = 'default',
			bg = 'none',
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

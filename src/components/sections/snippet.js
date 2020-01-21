import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/variables'

const SnippetContainer = styled.div`
	color: ${theme.colorBlack};

	h1,
	h2,
	h3,
	.h1,
	.h2,
	.h3 {
		font-size: 3em;
		color: inherit;
	}
	.subtitle {
		font-size: 1.5em;
		color: inherit;
	}

	&.contrast {
		padding: 48px;
		background-color: red;
		color: white;
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
export default class SnippetSection extends React.Component {
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
			theme = 'none',
			height = '100',
		} = this.props
		return (
			<SnippetContainer className={theme}>
				<div className="">{children}</div>
			</SnippetContainer>
		)
	}
}

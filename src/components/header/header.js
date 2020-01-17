import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../../theme/svg/yumm-logo.svg'
import styled from 'styled-components'
import theme from '../../theme/variables'

const HeaderContainer = styled.div`
	position: relative;
	a {
		color: inherit;
		text-decoration: inherit;
	}
	nav {
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		padding: 16px 24px;
		border: 4px solid ${theme.colorBlack};
		border-bottom: none;
		@media only screen and (max-width: 480px) {
			background-color: white;
		}
	}
	#logo {
		max-width: 160px;
		fill: black;
	}
	#headerCta {
		position: absolute;
		right: 16px;
		top: 16px;
		display: block;
		text-align: left;
		color: ${theme.colorBlack};
		transform: translate(50%, 0) rotateZ(90deg) translate(50%, 0%);
		font-size: 0.8em;
	}
`
const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<nav>
			<Link to="/">
				<Logo id="logo" />
			</Link>
			<span id="headerCta">
				<a
					href="https://www.linkedin.com/in/migueldf10/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Connect on LinkedIn
				</a>
			</span>
		</nav>
	</HeaderContainer>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header

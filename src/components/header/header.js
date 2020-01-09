import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../../theme/svg/yumm-logo.svg'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	position: relative;
	nav {
		position: absolute;
		left: 16px;
		right: 16px;
		top: 16px;
	}
	#logo {
		max-width: 160px;
	}
	#headerCta {
		position: absolute;
		right: 0px;
		top: 0px;
		display: block;
		transform: translate(50%, 300%) rotateZ(90deg);
	}
`
const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<nav>
			<Link to="/">
				<Logo id="logo" />
			</Link>
			<a
				href="https://www.linkedin.com/in/migueldf10/"
				id="headerCta"
				target="_blank"
				rel="noopener noreferrer"
			>
				Connect on LinkedIn
			</a>
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

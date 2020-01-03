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
`
const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<nav>
			<Link to="/">
				<Logo id="logo" />
			</Link>
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

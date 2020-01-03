import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../../theme/svg/yumm-logo.svg'

const Header = ({ siteTitle }) => (
	<div>
		<div>
			<h1>
				<Link to="/">
					<Logo />
				</Link>
			</h1>
		</div>
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header

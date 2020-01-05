import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/variables'
import Subscribe from './subscribe'
import FooterMenu from '../../../data/menus/footer'
import Menu from './menu'

const FooterContainer = styled.div`
	background-color: ${theme.colorBlack};
	margin-top: 60px;
	padding: 16px;
	.content {
		max-width: ${theme.contentMaxWidth};
		margin: auto;
	}
	.intro {
		color: white;
		font-size: 1.7em;
		margin: 3em 0;
		display: block;
		font-weight: 700;
	}
	.foot {
		padding: 20px;

		font-size: 0.9em;
		border-top: 2px solid white;
		display: block;
		color: white;
	}
`
export default class Footer extends React.Component {
	componentDidMount() {
		const script = document.createElement('script')
		script.src =
			'!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3dc1cec1d24d074a1709727a0/7047decdce419d929ddbe60a3.js");'
		script.async = true
		script.id = 'mcjs'
		document.body.appendChild(script)
	}
	render() {
		return (
			<FooterContainer>
				<div className="content">
					<span className="intro">
						Once a week, we share everything in our
						business. Marketing, Business, Design...
						Receive a compilation weekly:
					</span>
					<Subscribe />

					<div className="foot">
						<Menu menu={FooterMenu['en']} />
					</div>

					<div className="foot">
						<span>
							All rights reserved, Yumm.Studio 2020
						</span>
					</div>
				</div>
			</FooterContainer>
		)
	}
}

import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/variables'

const SubscribeContainer = styled.div`
	background-color: ${theme.colorBlack};
	margin-top: 60px;

	input {
		display: blocK;
		padding: 16px;
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 32px;
	}
	#mc-embedded-subscribe {
		width: auto;
	}
`
export default class Subscribe extends React.Component {
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
			<SubscribeContainer>
				<form
					id="newsletter-form"
					action="https://studio.us3.list-manage.com/subscribe/post?u=3dc1cec1d24d074a1709727a0&amp;id=a4504acfd2"
					method="post"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					// noValidate
				>
					<div id="mc_embed_signup_scroll">
						<div className="mc-field-group">
							<input
								type="email"
								defaultValue=""
								name="EMAIL"
								placeholder="Your mail here"
								className="required email"
								id="mce-EMAIL"
							/>
						</div>
						<div id="mce-responses" className="clear">
							<div
								className="response"
								id="mce-error-response"
								style={{ display: 'none' }}
							/>
							<div
								className="response"
								id="mce-success-response"
								style={{ display: 'none' }}
							/>
						</div>
						{/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
						<div
							style={{
								position: 'absolute',
								left: '-5000px',
							}}
							aria-hidden="true"
						>
							<input
								type="text"
								name="b_3dc1cec1d24d074a1709727a0_a4504acfd2"
								tabIndex="-1"
								defaultValue=""
							/>
						</div>
						<div className="clear">
							<input
								type="submit"
								defaultValue="Subscribe"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button button-primary-reverse"
							/>
						</div>
					</div>
				</form>
			</SubscribeContainer>
		)
	}
}

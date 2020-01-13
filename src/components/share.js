import React from 'react'
import styled from 'styled-components'
import theme from '../theme/variables'
import utmBuilder from '../utils/utmBuilder'

const ShareQuestionContainer = styled.div`
	position: fixed;
	right: 16px;
	bottom: 16px;
	display: block;
	text-align: left;
	transform: translate(50%, 0) rotateZ(90deg) translate(-50%, 0%);
	z-index: 2;
	text-decoration: underline;
`
const SharePanel = styled.div`
	position: fixed;
	right: 0px;
	left: 0px;
	bottom: 0px;
	min-height: 50%;
	z-index: 1;
	background-color: red;
	color: white;
	padding: 32px;
	transform: translateY(100%);
	transition: 0.7s ease-out;
	box-shadow: 0px 0px 20px black;
	.container {
		max-width: ${theme.contentMaxWidth};
		margin: auto;
	}
	&.active {
		display: block;
		transform: translateY(0%);
	}
	a {
		color: inherit;
	}
	span,
	a {
		display: block;
		margin-bottom: 32px;
	}
`

export default class Share extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ask: false,
			showPanel: false,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll = ev => {
		if (window.scrollY > 2450) {
			this.setState({
				ask: true,
			})
		} else {
			this.setState({
				ask: false,
			})
		}
	}

	sharePanelToggleClickHandler = () => {
		this.setState(prevState => {
			return { showPanel: !prevState.showPanel }
		})
	}
	render() {
		let askClasses = { display: 'none' }
		if (this.state.ask || this.state.showPanel) {
			askClasses = { display: 'block' }
		}
		let panelClasses = ''
		if (this.state.showPanel) {
			panelClasses = 'active'
		}
		const { title, url } = this.props.data
		return (
			<>
				<ShareQuestionContainer style={askClasses}>
					{this.state.showPanel ? (
						<span
							onClick={
								this.sharePanelToggleClickHandler
							}
							onKeyDown={
								this.sharePanelToggleClickHandler
							}
							role="button"
							tabIndex={0}
						>
							Back to the content
						</span>
					) : (
						<span
							onClick={
								this.sharePanelToggleClickHandler
							}
							onKeyDown={
								this.sharePanelToggleClickHandler
							}
							role="button"
							tabIndex={0}
						>
							Do you{' '}
							<span role="img" aria-label="love">
								❤️
							</span>{' '}
							this?
						</span>
					)}
				</ShareQuestionContainer>
				<SharePanel className={panelClasses}>
					<div className="container">
						<span>
							As a transparent agency, we share our
							content because we think is a good way of
							helping others
						</span>
						<span className="h2">
							Share to find it later
						</span>
						<span>And support us</span>
						<a
							href={
								'whatsapp://send?text=Hey! Look at this article at ' +
								utmBuilder(
									url,
									'whatsapp',
									'referral',
									'social_sharing'
								) +
								' !'
							}
							data-action="share/whatsapp/share"
						>
							Share via Whatsapp
						</a>
						<a
							href={
								'https://twitter.com/intent/tweet?url=' +
								utmBuilder(
									url,
									'twitter',
									'referral',
									'social_sharing'
								) +
								'&text=Look' +
								'&hashtags=css,html'
							}
						>
							Share via Twitter
						</a>
						<a
							href={
								'https://www.linkedin.com/shareArticle?mini=true&url=' +
								utmBuilder(
									url,
									'linkedin',
									'referral',
									'social_sharing'
								) +
								'&title=' +
								title +
								'&summary=https://yumm.studio'
							}
						>
							Share on LinkedIn
						</a>
					</div>
				</SharePanel>
			</>
		)
	}
}

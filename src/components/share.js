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
		this.updateWindowHeight = this.updateWindowHeight.bind(this)
		this.state = {
			ask: false,
			showPanel: false,
			askClasses: { display: 'none' },
			windowHeight: 0,
		}
	}

	componentDidMount() {
		this.updateWindowHeight()
		window.addEventListener('scroll', this.handleScroll)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll = ev => {
		if (window.scrollY > this.state.windowHeight / 2) {
			this.setState({
				ask: true,
			})
		}
	}
	updateWindowHeight() {
		this.setState({
			windowHeight: window.document.body.offsetHeight,
		})
	}

	sharePanelToggleClickHandler = () => {
		window.dataLayer.push({
			event: 'showShareMenu',
		})
		this.setState(prevState => {
			return { showPanel: !prevState.showPanel }
		})
	}
	addShareToDataLayer = element => {
		window.dataLayer.push({
			event: 'share',
			channel: element,
		})
	}
	render() {
		let askStyle = { display: 'none' }
		if (this.state.ask || this.state.showPanel) {
			askStyle = { display: 'block' }
		}
		let panelClasses = ''
		if (this.state.showPanel) {
			panelClasses = 'active'
		}
		const { title, url } = this.props.data
		return (
			<>
				<ShareQuestionContainer style={askStyle}>
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
							onClick={() => {
								this.addShareToDataLayer('whatsapp')
							}}
							onKeyDown={() => {
								this.addShareToDataLayer('whatsapp')
							}}
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
							onClick={() => {
								this.addShareToDataLayer('twitter')
							}}
							onKeyDown={() => {
								this.addShareToDataLayer('twitter')
							}}
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
							onClick={() => {
								this.addShareToDataLayer('linkedin')
							}}
							onKeyDown={() => {
								this.addShareToDataLayer('linkedin')
							}}
						>
							Share on LinkedIn
						</a>
					</div>
				</SharePanel>
			</>
		)
	}
}

import slugGenerator from './slugGenerator'
// var TinyURL = require('tinyurl')

const webAddress = 'https://yumm.studio'
function utmBuilder(
	linkUrl = '',
	source = '',
	medium = '',
	campaign = ''
) {
	const shareFullUrl =
		webAddress +
		linkUrl +
		'?utm_source=' +
		slugGenerator(source) +
		'&utm_medium=' +
		slugGenerator(medium) +
		'&utm_campaign=' +
		slugGenerator(campaign)

	return shareFullUrl
}

export default utmBuilder

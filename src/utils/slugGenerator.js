const slugify = require('slugify')

function slugGenerator(string) {
	return slugify(string, {
		replacement: '-', // replace spaces with replacement
		remove: /[*~.;¡áéíóúñ,()'"!:@]/g, // regex to remove characters
		lower: true, // result in lower case
	})
}

module.exports = slugGenerator

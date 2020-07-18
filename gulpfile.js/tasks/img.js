const { src, dest } = require(`gulp`);
const { changed } = require(`gulp-load-plugins`)();

const img = () => src(`source/img/**/*.{png,jpg}`)
	.pipe(changed(`build/img`))
	.pipe(dest(`build/img`));

module.exports = img;

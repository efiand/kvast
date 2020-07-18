const { series, watch } = require(`gulp`);
const tasks = require(`require-dir`)(`.`);
const { twighint, stylelint, eslint, html, css, img } = tasks;
const browserSync = require(`browser-sync`).create();

const reload = (done) => {
	browserSync.reload();
	done();
};

const server = () => {
	browserSync.init({
		cors: true,
		notify: false,
		port: 3000,
		server: `build`,
		ui: false
	});

	watch(`source/**/*.twig`, series(twighint, html, reload));
	watch(`source/less/**/*.less`, series(stylelint, css, reload));
	watch(`gulpfile.js/**/*.js`, series(eslint));
	watch(`source/img/**/*.{png,jpg}`, series(img, reload));
};

module.exports = server;

'use strict';

const { series, parallel } = require(`gulp`);
const tasks = require(`require-dir`)(`tasks`);

const { twighint, stylelint, eslint, clean, html, css, img, server } = tasks;

const test = parallel(twighint, stylelint, eslint);
const build = series(parallel(test, clean), parallel(html, css, img));

exports.test = test;
exports.build = build;
exports.default = series(build, server);

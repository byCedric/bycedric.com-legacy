/* eslint-disable import/no-extraneous-dependencies */
const { compose } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = compose(rewireEslint);

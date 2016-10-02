/// <reference path="../types/css-modules-require-hook.d.ts" />

import * as hook from 'css-modules-require-hook';
import * as sass from 'node-sass';

hook({
	extensions: '.scss',
	camelCase: true,
	generateScopedName: '[local]',
	preprocessCss: (data: string) => sass.renderSync({ data }).css,
});

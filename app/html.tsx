import * as React from 'react';
import { Component, ReactElement } from 'react';

export interface State { }
export interface Props {
	/** The html content rendered from the components. */
	body: string;
}

export default class Html extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<html lang='en'>
				<head>
					<meta charSet='utf-8' />
					<title>Cedric van Putten - byCedric</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />

					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='#333333' />

					<style dangerouslySetInnerHTML={{ __html: 'html, body, #app { margin: 0 }' }} />
					<link rel='stylesheet' type='text/css' href='/styles.css' />

					<link rel='manifest' href='/manifest.json' />
					<link rel='apple-touch-icon-precomposed' sizes='57x57' href='/assets/apple-icon-57.png' />
					<link rel='apple-touch-icon-precomposed' sizes='72x72' href='/assets/apple-icon-72.png' />
					<link rel='apple-touch-icon-precomposed' sizes='114x114' href='/assets/apple-icon-114.png' />
					<link rel='apple-touch-icon-precomposed' sizes='120x120' href='/assets/apple-icon-120.png' />
					<link rel='apple-touch-icon-precomposed' sizes='144x144' href='/assets/apple-icon-144.png' />
					<link rel='apple-touch-icon-precomposed' sizes='152x152' href='/assets/apple-icon-152.png' />
					<link rel='apple-touch-icon-precomposed' sizes='180x180' href='/assets/apple-icon-180.png' />
					<link rel='apple-touch-icon-precomposed' sizes='192x192' href='/assets/apple-icon-192.png' />
				</head>
				<body>
					<div id='app' dangerouslySetInnerHTML={{ __html: this.props.body }} />
					<script dangerouslySetInnerHTML={{ __html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/service-worker.js', { scope: '/' }); }` }} />
				</body>
			</html>
		);
	}
}

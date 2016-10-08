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
					<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
					<style dangerouslySetInnerHTML={{ __html: 'html, body, #app { margin: 0 }' }} />
					<link rel='stylesheet' type='text/css' href='/styles.css' />
				</head>
				<body>
					<div id='app' dangerouslySetInnerHTML={{ __html: this.props.body }} />
				</body>
			</html>
		);
	}
}

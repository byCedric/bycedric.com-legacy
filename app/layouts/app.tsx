import * as React from 'react';
import { Component, ReactElement } from 'react';

import IconObject from 'app/objects/icon';

export const styles = require('styles/layouts/_app');

export interface Props { }
export interface State { }

export default class AppLayout extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<div className={styles.lApp}>
				<h1 className={styles.lAppTitle}>Welcome to my app!</h1>
				<br /><br />
				<IconObject />
			</div>
		);
	}
}

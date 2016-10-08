import * as React from 'react';
import { Component, ReactElement } from 'react';

import ButtonObject from 'app/objects/button';

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
				<div className={styles.lAppButton}>
					<ButtonObject type='github' url='https://github.com/bycedric' />
				</div>

				<div className={styles.lAppButton}>
					<ButtonObject type='bitbucket' url='https://bitbucket.org/bycedric' />
				</div>

				<div className={styles.lAppButton}>
					<ButtonObject type='linkedin' url='https://linkedin.com/in/bycedric' />
				</div>

				<div className={styles.lAppButton}>
					<ButtonObject type='soundcloud' url='https://soundcloud.com/bycedric' />
				</div>
			</div>
		);
	}
}

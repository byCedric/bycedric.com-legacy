import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';

export const styles = require('styles/components/_my');

export interface Props { }
export interface State { }

export default class MyComponent extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return <h1 className={styles.cMy}>MyComponent</h1>;
	}
}

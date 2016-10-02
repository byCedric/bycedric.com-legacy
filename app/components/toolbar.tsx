import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';

export const styles = require('styles/components/_toolbar');

export interface Props { }
export interface State { }

export default class ToolbarComponent extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return <div className={styles.cToolbar}>toolbar</div>;
	}
}

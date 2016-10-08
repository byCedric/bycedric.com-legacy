import * as React from 'react';
import { Component, ReactElement } from 'react';
import * as cn from 'classnames';

export const styles = require('styles/objects/_icon');

export interface State { }
export interface Props {
	type: string;
}

export default class IconObject extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<i className={cn(styles.oIcon, `${styles.oIcon}--type-${this.props.type}`)} />
		);
	}
}

import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';
import * as cn from 'classnames';

import IconObject from 'app/objects/icon';

export const styles = require('styles/objects/_button');

export interface State { }
export interface Props {
	type: string;
	url: string;
}

export default class ButtonObject extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		const { type, url } = this.props;

		return (
			<a
				href={url}
				title={`Go to my ${type} page`}
				className={cn(styles.oButton, `${styles.oButton}--type-${type}`)}
			>
				<span className={styles.oButtonIcon}>
					<IconObject type={type} />
				</span>
				<p className={styles.oButtonText}>{type}</p>
			</a>
		);
	}
}

import * as React from 'react';
import { Component, PropTypes, ReactElement, ReactNode } from 'react';

import ToolbarComponent from 'app/components/toolbar';
import ArticlesListComponent from 'app/components/article/list';

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
				<ToolbarComponent />
				<ArticlesListComponent />
			</div>
		);
	}
}

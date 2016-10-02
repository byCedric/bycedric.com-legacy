import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';

export const styles = require('styles/components/article/list/_header');

export interface Props { }
export interface State { }

export default class ArticlesHeaderComponent extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<header className={styles.cArticleListHeader}>
				<h2 className={styles.cArticleListHeaderTitle}>Vandaag</h2>
			</header>
		);
	}
}

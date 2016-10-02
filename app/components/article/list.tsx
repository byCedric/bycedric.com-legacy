import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';

import ArticleListHeaderComponent from 'app/components/article/list/header';
import ArticleListItemComponent from 'app/components/article/list/item';

export const styles = require('styles/components/article/_list');

export interface Props { }
export interface State { }

export default class ArticlesListComponent extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<section className={styles.cArticleList}>
				<ArticleListHeaderComponent />
				<ArticleListItemComponent />
				<ArticleListItemComponent />
				<ArticleListItemComponent />
				<ArticleListHeaderComponent />
				<ArticleListItemComponent />
				<ArticleListItemComponent />
				<ArticleListItemComponent />
			</section>
		);
	}
}

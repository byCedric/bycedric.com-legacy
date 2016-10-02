import * as React from 'react';
import { Component, PropTypes, ReactElement } from 'react';

export const styles = require('styles/components/article/list/_item');

export interface Props { }
export interface State { }

export default class ArticlesItemComponent extends Component<Props, State>
{
	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render(): ReactElement<any> {
		return (
			<article className={styles.cArticleListItem}>
				<header className={styles.cArticleListItemHeader}>
					<h3 className={styles.cArticleListItemHeaderTitle}>
						Amsterdam krijgt zelfsturende boten in de grachten
					</h3>

					<p className={styles.cArticleListItemHeaderTimestamp}>
						<time dateTime='2016-09-19T14:45:47+0200'>14:45</time>
					</p>
				</header>

				<figure
					className={styles.cArticleListItemImage}
					style={{ backgroundImage: 'url(http://nos.nl/data/image/2016/09/19/318895/480x270.jpg)' }}
				>
					<img
						className={styles.cArticleListItemImageContainer}
						role='presentation'
						src='http://nos.nl/data/image/2016/09/19/318895/480x270.jpg'
					/>
				</figure>
			</article>
		);
	}
}

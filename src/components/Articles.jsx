import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import IsLoading from './IsLoading'

class Articles extends Component {
	state = {
		articles: [],
		isLoading: true
	};

	componentDidMount () {
		this.getArticles().then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	}

	getArticles () {
		return api.fetchAllArticles();
	}

	render () {
		return (
      <>
      {this.state.isLoading && <IsLoading />}
      {!this.state.isLoading && 
			<div className="Articles">
				<ul>
					{this.state.articles.map((article) => {
						return (
							<li key={article.article_id}>
								<ArticleCard articleInfo={article} />
							</li>
						);
					})}
				</ul>
			</div>}
      </>
		);
	}
}

export default Articles;

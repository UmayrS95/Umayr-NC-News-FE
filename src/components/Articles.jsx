import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import IsLoading from './IsLoading'
import '../css/Articles.css'
import {Link} from '@reach/router'

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

	componentDidUpdate (prevProps, prevState) {
		if (this.props.topic_slug !== prevProps.topic_slug) {
			this.getArticles(this.props.topic_slug).then(articles => {
				this.setState({articles, isLoading: false})
			})
		}
	}

	getArticles (topic) {
		return api.fetchAllArticles(topic);
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
								<Link to={`/articles/${article.article_id}`}><ArticleCard articleInfo={article} /></Link>
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

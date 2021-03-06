import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import IsLoading from './IsLoading';
import '../css/Articles.css';
import { Link } from '@reach/router';
import HandleError from './HandleError';

class Articles extends Component {
	state = {
		articles: [],
		sort_by: 'created_at',
		isLoading: true,
		err: false,
		errMsg: ''
	};

	componentDidMount () {
		this.getArticles(this.props.topic_slug)
			.then((articles) => {
				this.setState({ articles, isLoading: false });
			})
			.catch((err) => {
				this.setState({ errMsg: err.response.data.msg, err: true });
			});
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.topic_slug !== prevProps.topic_slug) {
			this.getArticles(this.props.topic_slug).then((articles) => {
				this.setState({ articles, isLoading: false, err: false });
			});
		}
	}

	getArticles (topic, sort_by, order) {
		return api.fetchAllArticles(topic, sort_by, order);
	}

	sortArticleTopic (event) {
		const sort_by = event.target.value;
		this.setState((currentState) => {
			return { ...currentState, sort_by };
		});
	}

	sortArticleOrder (event) {
		event.preventDefault();
		const order = event.target.value;
		this.getArticles(this.props.topic_slug, this.state.sort_by, order).then((articles) => {
			this.setState((currentState) => {
				return { ...currentState, articles };
			});
		});
	}

	render () {
		return (
			<div className="container">
				{this.state.err && <HandleError msg={this.state.errMsg} />}
				{this.state.isLoading && !this.state.err && <IsLoading />}
				{!this.state.isLoading && (
					<div>
						<form>
							<label htmlFor="nav-sort">Sort-By: </label>
							<select
								name="nav-sort"
								id="nav-sortby"
								onChange={(event) => {
									this.sortArticleTopic(event);
								}}
							>
								<option value="created_at">Date</option>
								<option value="comment_count">Comment Count</option>
								<option value="votes">Votes</option>
							</select>
							<button
								id="sort-button"
								value="asc"
								onClick={(event) => {
									this.sortArticleOrder(event);
								}}
							>
								asc
							</button>
							<button
								id="sort-button"
								value="desc"
								onClick={(event) => {
									this.sortArticleOrder(event);
								}}
							>
								desc
							</button>
						</form>
						<div className="Articles">
							<ul>
								{this.state.articles.map((article) => {
									return (
										<li key={article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												<ArticleCard articleInfo={article} />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Articles;

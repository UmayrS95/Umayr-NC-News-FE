import React, { Component } from 'react';
import * as api from '../utils/api';
import '../css/SingleArticle.css';
import { dateFormat } from '../utils/utils';
import Comment from '../components/Comment';

class SingleArticle extends Component {
	state = {
		title: '',
		body: '',
		votes: 0,
		topic: '',
		author: '',
		created_at: '',
		comment_count: '',
		comments: [],
		isLoading: true
	};

	componentDidMount () {
		this.getSingleArticle(this.props.article_id)
			.then(({ title, body, votes, topic, author, created_at, comment_count }) => {
				this.setState({ title, body, votes, topic, author, created_at, comment_count, isLoading: false });
			})
			.then(() => {
				this.getArticleComments(this.props.article_id).then((comments) => {
					this.setState((currentState) => {
						return { ...currentState, comments };
					});
				});
			});
	}

	getSingleArticle (article_id) {
		return api.fetchSingleArticle(article_id);
	}

	getArticleComments (article_id) {
		return api.fetchArticleComments(article_id);
	}

	render () {
		const date = dateFormat(this.state.created_at);
		return (
			<div className="SingleArticle">
				<div>
					<h1>{this.state.title}</h1>
					<h4>Written by: {this.state.author}</h4>
					<h4>Posted: {date}</h4>
					<p>{this.state.body}</p>
				</div>
				<h4 id="comment-title">Comments</h4>
				<ul>
					{this.state.comments.length > 0 &&
						this.state.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<Comment commentInfo={comment} />
								</li>
							);
						})}
				</ul>
			</div>
		);
	}
}

export default SingleArticle;

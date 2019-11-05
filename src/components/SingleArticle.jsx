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
				const date = dateFormat(created_at);
				this.setState({ title, body, votes, topic, author, created_at: date, comment_count, isLoading: false });
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
		// .then((comments) => {
		// 	this.setState(currentState => {
		// 		return {...currentState, comments}
		// 	})
		// });
	}

	render () {
		return (
			<div className="SingleArticle">
				<div>
					<h1>{this.state.title}</h1>
					<h4>Written by: {this.state.author}</h4>
					<h4>Posted: {this.state.created_at}</h4>
					<p>{this.state.body}</p>
					{/* <button onClick={() => {this.getArticleComments(this.props.article_id)}}>View Comments</button> */}
				</div>
				<h4>Comments</h4>
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

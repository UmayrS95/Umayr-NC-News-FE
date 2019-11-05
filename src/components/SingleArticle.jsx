import React, { Component } from 'react';
import * as api from '../utils/api';
import '../css/SingleArticle.css';

class SingleArticle extends Component {
	state = {
		title: '',
		body: '',
		votes: 0,
		topic: '',
		author: '',
		created_at: '',
		comment_count: '',
		isLoading: true
	};

	componentDidMount () {
		this.getSingleArticle(
			this.props.article_id
		).then(({ title, body, votes, topic, author, created_at, comment_count }) => {
			this.setState({ title, body, votes, topic, author, created_at, comment_count, isLoading: false });
		});
	}

	getSingleArticle (article_id) {
		return api.fetchSingleArticle(article_id);
	}

	render () {
		return (
			<div className="SingleArticle">
				<h1>{this.state.title}</h1>
				<p>{this.state.body}</p>
			</div>
		);
	}
}

export default SingleArticle;

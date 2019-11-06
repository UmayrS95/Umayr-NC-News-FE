import React, { Component } from 'react';
import * as api from '../utils/api';
import '../css/SingleArticle.css';
import { dateFormat } from '../utils/utils';
import Comment from '../components/Comment';
import '../css/ArticleCommentBox.css';
import Voter from './Voter';
import IsLoading from './IsLoading'
import HandleError from './HandleError';

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
		commentBox: '',
		isLoading: true,
		err: false,
		errMsg: ''
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
			})
			.catch(err => {
				this.setState({err: true, errMsg: err.response.data.msg})
			});
	}

	getSingleArticle = (article_id) => {
		return api.fetchSingleArticle(article_id);
	};

	getArticleComments = (article_id) => {
		return api.fetchArticleComments(article_id);
	};

	handleCommentBoxChange = (event) => {
		const text = event.target.value;
		this.setState((currentState) => {
			return { ...currentState, commentBox: text };
		});
	};

	handlePostComment = (article_id, username, body) => {
		return api.postComment(article_id, username, body).then((comment) => {
			this.setState((currentState) => {
				return { ...currentState, comments: [ comment, ...currentState.comments ], commentBox: '' };
			});
		});
	};

	handleDeleteComment = (comment_id, article_id) => {
		api
			.deleteComment(comment_id)
			.then(() => {
				return api.fetchArticleComments(article_id);
			})
			.then((comments) => {
				this.setState((currentState) => {
					return { ...currentState, comments };
				});
			});
	};

	render () {
		const date = dateFormat(this.state.created_at);
		return (
			<>
			{this.state.err && <HandleError msg={this.state.errMsg}/>}
			{this.state.isLoading && !this.state.err && <IsLoading />}
			{!this.state.isLoading && 
			<div className="SingleArticle">
				<div>
					<h1>{this.state.title}</h1>
					<h4>Written by: {this.state.author}</h4>
					<h4>Posted: {date}</h4>
					<p>{this.state.body}</p>
				</div>
				<Voter votes={this.state.votes} id={this.props.article_id} type="articles" />
				<h4 id="comment-title">Comments</h4>
				<textarea
					className="ArticleCommentBox"
					placeholder="Your comment here..."
					name="commentBox"
					onChange={(event) => {
						this.handleCommentBoxChange(event);
					}}
				/>
				<button
					id="post-comment-button"
					disabled={this.state.commentBox === ''}
					onClick={() => {
						this.handlePostComment(this.props.article_id, this.props.username, this.state.commentBox);
					}}
				>
					Post Comment
				</button>
				<ul>
					{this.state.comments.length > 0 &&
						this.state.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<Comment
										commentInfo={comment}
										handleDeleteComment={this.handleDeleteComment}
										username={this.props.username}
										articleId={this.props.article_id}
									/>
								</li>
							);
						})}
				</ul>
			</div>}
			</>
		);
	}
}

export default SingleArticle;

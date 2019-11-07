import React from 'react';
import '../css/Comment.css';
import { dateFormat } from '../utils/utils';
import Voter from './Voter';

class Comment extends React.Component {
	render () {
		const { commentInfo, username } = this.props;
		const date = dateFormat(commentInfo.created_at);
		return (
			<div className="Comment">
				<h4>{commentInfo.author}</h4>
				<p>{commentInfo.body}</p>
				<p>{date}</p>
				<Voter votes={commentInfo.votes} type="comments" id={commentInfo.comment_id} />
				{username === commentInfo.author && (
					<button
						id="delete-button"
						onClick={() => {
							this.props.handleDeleteComment(commentInfo.comment_id, this.props.articleId);
						}}
					>
						Delete comment
					</button>
				)}
			</div>
		);
	}
}

export default Comment;

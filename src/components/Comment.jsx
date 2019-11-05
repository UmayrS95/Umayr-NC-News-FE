import React from 'react';
import '../css/Comment.css';
import { dateFormat } from '../utils/utils';

const Comment = ({ commentInfo }) => {
	const date = dateFormat(commentInfo.created_at);
	return (
		<div className="Comment">
			<h4>{commentInfo.author}</h4>
			<p>{commentInfo.body}</p>
			<p>{date}</p>
		</div>
	);
};

export default Comment;

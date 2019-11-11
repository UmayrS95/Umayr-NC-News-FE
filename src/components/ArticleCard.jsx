import React from 'react';
import { dateFormat } from '../utils/utils';
import '../css/ArticleCard.css';

const ArticleCard = ({ articleInfo }) => {
	const date = dateFormat(articleInfo.created_at);
	return (
		<div className="ArticleCard">
			<h4>{articleInfo.title}</h4>
			<h5 id="date">{date}</h5>
			<h5 id="author">{articleInfo.author}</h5>
			<div className="ArticleCardInfo">
				<h5 id="topic-type">/{articleInfo.topic}</h5>
				<h5>
					<img src="https://www.freeiconspng.com/uploads/like-thumbs-up-vote-icon-14.png" alt="thumbs-up icon" />
					{articleInfo.votes}
				</h5>
				<h5>
					<img src="https://www.freeiconspng.com/uploads/comment-png-1.png" alt="comments icon" />
					{articleInfo.comment_count}
				</h5>
			</div>
		</div>
	);
};

export default ArticleCard;

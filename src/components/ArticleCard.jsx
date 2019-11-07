import React from 'react';
import { dateFormat } from '../utils/utils';
import '../css/ArticleCard.css';

const ArticleCard = ({ articleInfo }) => {
	const date = dateFormat(articleInfo.created_at);
	return (
		<div className="ArticleCard">
			<h4>{articleInfo.title}</h4>
			<h5 id="date">{date}</h5>
			<div className="ArticleCardInfo">
				<h5>{articleInfo.author}</h5>
				<h5>topic: {articleInfo.topic}</h5>
				<h5>votes: {articleInfo.votes}</h5>
				<h5>comments: {articleInfo.comment_count}</h5>
			</div>
		</div>
	);
};

export default ArticleCard;

import React from 'react';

const ArticleCard = ({ articleInfo }) => {
	return (
		<div className="ArticleCard">
			<h4>{articleInfo.title}</h4>
			<h5>written by: {articleInfo.author}</h5>
			<h5>topic: {articleInfo.topic}</h5>
			<h5>date written: {articleInfo.creates_at}</h5>
			<h5>votes: {articleInfo.votes}</h5>
		</div>
	);
};

export default ArticleCard;

import React from 'react';

const ArticleCard = (info) => {
	return (
		<div className="ArticleCard">
			<h5>{info.articleInfo.title}</h5>
		</div>
	);
};

export default ArticleCard;

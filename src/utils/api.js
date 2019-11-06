const axios = require('axios');
const baseURL = 'https://umayrs-news.herokuapp.com/api';

export const fetchAllArticles = (topic, sort_by, order) => {
	console.log(topic);

	return axios.get(`${baseURL}/articles`, { params: { topic, sort_by, order } }).then(({ data }) => {
		return data.articles;
	});
};

export const fetchSingleArticle = (article_id) => {
	return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
		return data.article;
	});
};

export const fetchArticleComments = (article_id) => {
	return axios.get(`${baseURL}/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const postComment = (article_id, username, body) => {
	return axios.post(`${baseURL}/articles/${article_id}/comments`, { username, body }).then(({ data }) => {
		return data.comment;
	});
};

export const deleteComment = (comment_id) => {
	return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const patchVotes = (id, type, votes) => {
	return axios.patch(`${baseURL}/${type}/${id}`, { inc_votes: votes }).then(({ data }) => {
		return data.article;
	});
};

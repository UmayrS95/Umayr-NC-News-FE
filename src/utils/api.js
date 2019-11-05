const axios = require('axios');
const baseURL = 'https://umayrs-news.herokuapp.com/api';

export const fetchAllArticles = (topic) => {
	return axios.get(baseURL + '/articles', { params: { topic } }).then(({ data }) => {
		return data.articles;
	});
};

export const fetchSingleArticle = (article_id) => {
	return axios.get(baseURL + '/articles/' + article_id).then(({ data }) => {
		return data.article;
	});
};

export const fetchArticleComments = (article_id) => {
	return axios.get(baseURL + '/articles/' + article_id + '/comments').then(({ data }) => {
		return data.comments;
	});
};

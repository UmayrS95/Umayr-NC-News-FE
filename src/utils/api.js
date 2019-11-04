const axios = require('axios');

export const fetchAllArticles = () => {
	return axios.get('https://umayrs-news.herokuapp.com/api/articles').then(({ data }) => {
		return data.articles;
	});
};

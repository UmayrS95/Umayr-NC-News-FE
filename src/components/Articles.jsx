import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import IsLoading from './IsLoading'
import '../css/Articles.css'
import {Link} from '@reach/router'

class Articles extends Component {
	state = {
		articles: [],
		sort_by: '',
		order: 'asc',
		isLoading: true
	};

	componentDidMount () {
		this.getArticles().then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.topic_slug !== prevProps.topic_slug) {
			this.getArticles(this.props.topic_slug).then(articles => {
				this.setState({articles, isLoading: false})
			})
		}
	}

	getArticles (topic) {
		return api.fetchAllArticles(topic);
	}

	sortArticles (event) {
		console.log(this.props);
		console.log(event);	
	}

	/**
	 * *if asc or desc is selected that button is highlighted
	 */

	render () {
		return (
			<>
      {this.state.isLoading && <IsLoading />}
			{!this.state.isLoading && 
			<div>
				<form>
					<label htmlFor="nav-sort">Sort-By: </label>
						<select name="nav-sort" id="nav-sortby">
							<option value="created_at" >Date</option>
							<option value="comment_count">Comment Count</option>
							<option value="votes">Votes</option>
						</select>
					<button id='sort-button' onClick={(event) => {this.sortArticles(event)}}>asc</button>
					<button id='sort-button'>desc</button>
				</form>
			<div className="Articles">
				<ul>
					{this.state.articles.map((article) => {
						return (
							<li key={article.article_id}>
								<Link to={`/articles/${article.article_id}`}><ArticleCard articleInfo={article} /></Link>
							</li>
						);
					})}
				</ul>
			</div>
			</div>
			}
		</>
		);
	}
}

export default Articles;

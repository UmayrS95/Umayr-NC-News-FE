import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Footer from './components/Footer';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Navbar from './components/Navbar';

function App () {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<Router>
				<Articles path="/" />
				<Articles path="/:topic_slug" />
				<SingleArticle path="/articles/:article_id" />
			</Router>
			<Footer />
		</div>
	);
}

export default App;

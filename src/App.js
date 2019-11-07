import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Footer from './components/Footer';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Navbar from './components/Navbar';
import HandleError from './components/HandleError';

class App extends React.Component {
	state = {
		userCredName: 'tickle122'
	};
	render () {
		return (
			<div className="App">
				<Header username={this.state.userCredName} />
				<Navbar />
				<Router primary={false} className="Router">
					<HandleError default msg="Cannot find what you are looking for!" />
					<Articles path="/" username={this.state.userCredName} />
					<Articles path="/articles" username={this.state.userCredName} />
					<Articles path="/:topic_slug" username={this.state.userCredName} />
					<SingleArticle path="/articles/:article_id" username={this.state.userCredName} />
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;

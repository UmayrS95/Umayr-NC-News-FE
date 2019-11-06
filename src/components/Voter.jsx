import React, { Component } from 'react';
import '../css/Voter.css';
import * as api from '../utils/api';

class Voter extends Component {
	state = {
		clickVote: 0
	};

	handleVoteClick = (num) => {
		api.patchVotes(this.props.id, this.props.type, num);
		this.setState({ clickVote: this.state.clickVote + num });
	};

	render () {
		return (
			<div className="Voter">
				<button
					id="down-vote"
					disabled={this.state.clickVote === -1}
					onClick={() => {
						this.handleVoteClick(-1);
					}}
				>
					Down-vote
				</button>
				<p>Votes: {this.props.votes + this.state.clickVote} </p>
				<button
					id="up-vote"
					disabled={this.state.clickVote === 1}
					onClick={() => {
						this.handleVoteClick(1);
					}}
				>
					Up-vote
				</button>
			</div>
		);
	}
}

export default Voter;

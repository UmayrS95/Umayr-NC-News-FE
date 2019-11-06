import React from 'react';
import '../css/Header.css';

const Header = ({ username }) => {
	return (
		<div className="Header">
			<h1>NC News</h1>
			<p>
				Welcome User<br />
				{username}
			</p>
		</div>
	);
};

export default Header;

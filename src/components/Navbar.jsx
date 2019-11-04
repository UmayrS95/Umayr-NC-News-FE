import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
	return (
		<div className="Navbar">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>Cooking</li>
					<li>Football</li>
					<li>Coding</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

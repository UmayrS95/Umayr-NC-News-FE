import React from 'react';
import { Link } from '@reach/router';
import '../css/Navbar.css';

const Navbar = () => {
	return (
		<div className="Navbar">
			<nav>
				<ul>
					<li>
						<Link to="/">All</Link>
					</li>
					<li>
						<Link to="/cooking">Cooking</Link>
					</li>
					<li>
						<Link to="/football">Football</Link>
					</li>
					<li>
						<Link to="/coding">Coding</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

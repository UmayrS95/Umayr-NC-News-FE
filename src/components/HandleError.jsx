import React from 'react';
import '../css/HandleError.css';

const HandleError = ({ msg }) => {
	return (
		<div className="HandleError">
			<h2> Sorry, {msg}</h2>
		</div>
	);
};

export default HandleError;

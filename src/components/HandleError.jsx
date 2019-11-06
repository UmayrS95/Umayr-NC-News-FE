import React from 'react';
import '../css/HandleError.css';

const HandleError = ({ msg }) => {
	return (
		<div className="HandleError">
			<h2>{msg}</h2>
		</div>
	);
};

export default HandleError;

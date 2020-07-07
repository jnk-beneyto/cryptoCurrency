import React from "react";

const Error = ({ message }) => {
	return (
		<div className="alert alert-danger">
			<h4>{message}</h4>
		</div>
	);
};

export default Error;

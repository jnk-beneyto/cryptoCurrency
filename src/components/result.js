import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Box = styled.div`
	margin: 15px auto;
	padding: 5px;
	width: 100%;
	border: 2px solid black;
	border-radius: 5px;
	height: auto;
	background-color: #2477bb;
	color: white;
`;

const Result = ({ result }) => {
	if (Object.keys(result).length === 0) return null;

	return (
		<Fragment>
			<Box>
				<div className="container">
					<div className="row">Precio: {result.PRICE}</div>
					<div className="row">Precio MAX (24h): {result.HIGHDAY}</div>
					<div className="row">Precio MIN (24h): {result.LOWDAY}</div>
					<div className="row">Última actualización: {result.LASTUPDATE}</div>
				</div>
			</Box>
		</Fragment>
	);
};

export default Result;

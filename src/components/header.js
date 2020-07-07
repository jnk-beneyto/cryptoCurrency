import React from "react";
import styled from "@emotion/styled";

const Titlecontent = styled.div`
	background-color: #fd8e26;
	width: 100%;
`;

const Header = ({ title }) => {
	return (
		<Titlecontent>
			<div className="container">
				<h1 className="text text-center text-light"> {title}</h1>
			</div>
		</Titlecontent>
	);
};

export default Header;

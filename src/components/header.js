import React from "react";
import styled from "@emotion/styled";

const Titlecontent = styled.div`
	height: 60px;
	background-color: blue;
	width: 100%;
`;

const Header = ({ title }) => {
	return (
		<Titlecontent>
			<h1 className="text text-center text-light"> {title}</h1>
		</Titlecontent>
	);
};

export default Header;

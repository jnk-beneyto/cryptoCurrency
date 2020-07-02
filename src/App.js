import React, { Fragment } from "react";
import Header from "./components/header";
import styled from "@emotion/styled";

import image from "./img/cryptocurrency.png";

const Imagecontainer = styled.img`
	max-width: 100%;
`;

function App() {
	return (
		<Fragment>
			<Header title="Cotizador de Criptomonedas" />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Imagecontainer src={image} alt="imagen" />
					</div>
					<div className="col-sm-12 col-md-6">
						<h3>Selecciona moneda:</h3>{" "}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

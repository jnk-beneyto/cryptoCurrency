import React, { Fragment } from "react";
import Header from "./components/header";

function App() {
	return (
		<Fragment>
			<Header title="Cotizador de Criptomonedas" />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">logo</div>
					<div className="col-sm-12 col-md-6">form</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

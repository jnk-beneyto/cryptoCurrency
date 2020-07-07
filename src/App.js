import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Result from "./components/result";
import styled from "@emotion/styled";
import image from "./img/cryptocurrency.png";
import axios from "axios";

const Imagecontainer = styled.img`
	max-width: 100%;
`;

function App() {
	const [currency, setCurrency] = useState("");
	const [cryptocurrency, setCryptoCurrency] = useState("");
	const [result, setResult] = useState({});

	useEffect(() => {
		//avoiding first time execution because there's nothing
		if (currency === "") return;

		//if there's some data
		const getResult = async () => {
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
			const result = await axios.get(url);
			//modifying the object result dinamically depending on the crypto and currency chosen
			setResult(result.data.DISPLAY[cryptocurrency][currency]);
		};
		getResult();
	}, [currency, cryptocurrency]);

	return (
		<Fragment>
			<Header title="Cotizador de Criptomonedas" />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<div className="container mx-auto">
							<Imagecontainer src={image} alt="imagen" />
						</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<div className="container mx-auto">
							<h3>Selecciona datos:</h3>{" "}
							<Form
								setCurrency={setCurrency}
								setCryptoCurrency={setCryptoCurrency}
							/>
						</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<Result result={result} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;

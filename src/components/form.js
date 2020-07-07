import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./error";
import useCurrency from "../hooks/useCurrency";
import useCryptocurrency from "../hooks/useCryptocurrency";
import Axios from "axios";

const Form = ({ setCurrency, setCryptoCurrency }) => {
	const [error, setError] = useState(false);

	const CURRENCY = [
		{ cod: "USD", name: "US Dollar" },
		{ cod: "EUR", name: "Euro" },
		{ cod: "GBP", name: "Libra Esterlina" }
	];

	//state cryptoList
	const [listCrypto, setListCrypto] = useState([]);

	//fetching cripto data from API
	useEffect(() => {
		const getCRYPTO = async () => {
			const url =
				"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
			const result = await Axios.get(url);
			setListCrypto(result.data.Data);
		};
		getCRYPTO();
	}, []);

	//currency custom Hook
	const [currency, Selector] = useCurrency("Selecciona", "", CURRENCY);

	//cryptocurrency custom Hook
	const [cripto, CryptoCurrencySelector] = useCryptocurrency(
		"Selecciona",
		"",
		listCrypto
	);

	const extractData = e => {
		e.preventDefault();
		if (currency === "" || cripto === "") {
			setError(true);
			return;
		}
		setError(false);

		//modifying state from APP

		setCryptoCurrency(cripto);
		setCurrency(currency);
	};

	return (
		<Fragment>
			<form onSubmit={extractData}>
				<div className="container">
					<div className="row">
						{error ? <Error message="Selecciona todos los valores" /> : null}
					</div>
					<div className="row">
						<Selector />
					</div>
					<div className="row">
						<CryptoCurrencySelector />
					</div>
				</div>
				<div className="container">
					<input className="btn btn-secondary" type="submit" value="Calcular" />
				</div>
			</form>
		</Fragment>
	);
};

export default Form;

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

//styling component

const Selectcrypto = styled.select`
	-webkit-appearance: none;
	display: block;
	width: 100%;
	padding: 1rem;
	border: none;
	border-radius: 5px;
	margin-bottom: 2rem;
	background-color: whitesmoke;
`;

//custom hook
// label = "Selecciona", initialStat e= "", CURRENCY = CURRENCY

const useCryptocurrency = (label, initialState, CRYPTO) => {
	//Creating our custom state and function that changes the state

	const [state, setState] = useState(initialState);

	//Creating our custom component
	const cryptoCurrencySelector = () => {
		return (
			<Selectcrypto onChange={e => setState(e.target.value)} value={state}>
				<label>{label}</label>
				<option value="">- Selecciona -</option>
				{CRYPTO.map(value => (
					<option key={value.CoinInfo.Id} val={value.CoinInfo.Name}>
						{value.CoinInfo.Name}
					</option>
				))}{" "}
			</Selectcrypto>
		);
	};

	//returning our custom state, function that modify the state and the component
	return [state, cryptoCurrencySelector, setState];
};

export default useCryptocurrency;

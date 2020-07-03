import React, { useState } from "react";
import styled from "@emotion/styled";

//styling component

const Select = styled.select`
	width: 50%;
	height: 30px;
	margin-bottom: 2rem;
	background-color: whitesmoke;
`;

//custom hook
// label = "Selecciona", initialStat e= "", CURRENCY = CURRENCY

const useCurrency = (label, initialState, CURRENCY) => {
	//Creating our custom state and function that changes the state

	const [state, setState] = useState(initialState);

	//Creating our custom component
	const currencySelector = () => {
		return (
			<Select onChange={e => setState(e.target.value)} value={state}>
				<label>{label}</label>
				<option value="">- Selecciona -</option>
				{CURRENCY.map(value => (
					<option key={value.cod} val={value.cod}>
						{value.name}
					</option>
				))}{" "}
			</Select>
		);
	};

	//returning our custom state, function that modify the state and the component
	return [state, currencySelector, setState];
};

export default useCurrency;

import React, { Fragment } from "react";
import styled from "@emotion/styled";
import useCurreny from "../hooks/useCurrency";

const Form = () => {
	const CURRENCY = [
		{ cod: "USD", name: "US Dollar" },
		{ cod: "EUR", name: "Euro" },
		{ cod: "GBP", name: "Libra Esterlina" }
	];

	const [currency, Selector] = useCurreny("Selecciona", "", CURRENCY);

	return (
		<Fragment>
			<form>
				<div className="container">
					<div className="row">
						<Selector />
					</div>
					<div className="row"></div>
				</div>
				<div className="container">
					<input className="btn btn-secondary" type="button" value="Calcular" />
				</div>
			</form>
		</Fragment>
	);
};

export default Form;

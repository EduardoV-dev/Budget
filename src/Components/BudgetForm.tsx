import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

interface Props {
	setStatedBudget: React.Dispatch<React.SetStateAction<number>>;
}

const BudgetForm: React.FC<Props> = ({ setStatedBudget }) => {
	const [budget, setBudget] = useState<number>(0);
	const [error, setError] = useState<boolean>(false);

	const addBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBudget(parseInt(e.target.value));
	}

	// States the value for the budget
	const stateBudget = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (budget < 1 || isNaN(budget)) {
			setError(true);
			return;
		}

		setError(false);
		setStatedBudget(budget);
		setBudget(0);
	}

	return (
		<Fragment>
			<h2 data-testid='budgetform-title'>Coloca tu presupuesto</h2>

			{error
				? (
					<Error
						message="El presupuesto es incorrecto"
					/>
				) : null}

			<form
				onSubmit={stateBudget}
			>
				<div className="form-group">
					<input
						type="number"
						className="form-control"
						placeholder="Coloca tu presupuesto"
						onChange={addBudget}
						value={budget}
						data-testid='budgetform-budget'
					/>
				</div>
				<div className="form-group">
					<button
						type="submit"
						className="form-control btn btn-primary btn-block"
						data-testid='budgetform-submit'
					>Definir Presupuesto</button>
				</div>
			</form>
		</Fragment>
	);
}

BudgetForm.propTypes = {
	setStatedBudget: PropTypes.func.isRequired
}

export default BudgetForm;
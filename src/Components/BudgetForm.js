import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const BudgetForm = ({setStatedBudget}) => {
    const [budget, setBudget] = useState(0)
    const [error, setError] = useState(false);

    const addBudget = e => {
        setBudget(parseInt(e.target.value));
    }

    // States the value for the budget
    const stateBudget = e => {
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
            <h2>Coloca tu presupuesto</h2>

            {error
                ? (
                    <Error
                        mensaje="El presupuesto es incorrecto"
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
                    />
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        className="form-control btn btn-primary btn-block"
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
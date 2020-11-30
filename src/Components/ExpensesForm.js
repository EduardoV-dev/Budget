import React, { Fragment, useState } from 'react';
import Error from './Error';
import uniqid from 'uniqid';
import PropTypes from  'prop-types';

const ExpensesForm = ({ addNewExpense }) => {

    const [spending, setSpending] = useState({
        name: '',
        expense: 0
    });
    const [error, setError] = useState(false);
    const { name, expense } = spending;

    // Adds input values into the state hook
    const addExpense = e => {
        if (e.target.name === 'expense') setSpending({ ...spending, [e.target.name]: parseInt(e.target.value) });
        else setSpending({ ...spending, [e.target.name]: e.target.value });
    }

    // Adds a new concept for spending when submit
    const addExpending = e => {
        e.preventDefault();

        if (name === '' || !isNaN(name) || expense < 1 || isNaN(expense)) {
            setError(true);
            return;
        }
        setError(false);

        spending.id = uniqid();

        // Set new expense to a expenses array
        addNewExpense(spending);

        setSpending({
            name: '',
            expense: 0
        });
    }

    return (
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>

            {error
                ? (<Error
                    mensaje="Los campos son obligatorios. El nombre no puede ser sólo números. El presupuesto debe ser mayor a 0"
                />)
                : null}

            <form
                onSubmit={addExpending}
            >
                <div className="form-group">
                    <label className="font-weight-bold">Nombre Gasto</label>
                    <input
                        type="input"
                        className="form-control"
                        placeholder="Ej. Transporte"
                        name="name"
                        value={name}
                        onChange={addExpense}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Cantidad Gasto</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ej. 300"
                        name="expense"
                        value={expense}
                        onChange={addExpense}
                    />
                </div>
                <div className="form-group mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >Agregar Gasto</button>
                </div>
            </form>
        </Fragment>
    );
}

ExpensesForm.propTypes = {
    addNewExpense: PropTypes.func.isRequired
}

export default ExpensesForm;
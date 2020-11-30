import React from 'react';
import ExpenseItem from './ExpenseItem';
import { setAlertColor } from '../helpers';
import PropTypes from 'prop-types';

const ExpenseList = ({ statedBudget, remaining, expense }) => {

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>

            {expense.length === 0
                ? null
                : expense.map(spending => (
                    <ExpenseItem
                        key={spending.id}
                        spending={spending}
                    />
                ))}

            <p className="alert alert-success px-3 py-2 my-2">Presupuesto:
                <span className="text-weight-bold"> ${statedBudget}</span>
            </p>
            <p className={ setAlertColor(statedBudget, remaining) }>Restante:
            <span className="text-weight-bold"> ${remaining}</span>
            </p>
        </div>
    );
}

ExpenseList.propTypes = {
    statedBudget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    expense: PropTypes.array.isRequired
}

export default ExpenseList;
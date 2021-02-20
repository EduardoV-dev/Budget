import React from 'react';
import { Spending } from '../interfaces';
import ExpenseItem from './ExpenseItem';
import { setAlertColor } from '../helpers';

interface Props {
    statedBudget: number;
    remaining: number;
    expense: Spending[];
}

const ExpenseList: React.FC<Props> = ({ statedBudget, remaining, expense }) => {

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {expense.length === 0
                ? null
                : expense.map((spending: Spending) => (
                    <ExpenseItem
                        key={spending.id}
                        spending={spending}
                    />
                ))}
            <p className="alert alert-success px-3 py-2 my-2">Presupuesto:
                <span className="text-weight-bold"> ${statedBudget}</span>
            </p>
            <p className={setAlertColor(statedBudget, remaining)}>Restante:
            <span className="text-weight-bold"> ${remaining}</span>
            </p>
        </div>
    );
}

export default ExpenseList;
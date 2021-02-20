import React from 'react';

interface Spending {
    name: string;
    expense: number;
}

interface Props {
    spending: Spending;
}

const ExpenseItem: React.FC<Props> = ({ spending }) => {

    const { name, expense } = spending;

    return (
        <li className="gastos" data-testid='expenseitem'>
            <p>
                {name}

                <span className="gasto">$ {expense} </span>
            </p>
        </li>
    );
}

export default ExpenseItem;
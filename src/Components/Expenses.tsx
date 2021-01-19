import React, { useState, useEffect } from 'react';
import { Spending } from '../interfaces';
import ExpensesForm from './ExpensesForm';
import ExpenseList from './ExpenseList';
import PropTypes from 'prop-types';

interface Props {
    statedBudget: number;
    remaining: number;
    setRemaining: React.Dispatch<React.SetStateAction<number>>
}

const Expenses: React.FC<Props> = ({ statedBudget, remaining, setRemaining }) => {

    const [expense, setExpense] = useState<Spending[]>([]);

    // Adds to the expense state a new expense
    const addNewExpense = (spending: Spending): void => {
        setExpense([...expense, spending]);
    }

    // useEffect for setting the amount spent when spending status change
    useEffect(() => {
        if (expense.length === 0) return;
        // Assing the value of last spent to its state
        let newRemaining = remaining - expense[expense.length - 1].expense;
        setRemaining(newRemaining);
    }, [expense]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <ExpensesForm
                        addNewExpense={addNewExpense}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <ExpenseList 
                        statedBudget={statedBudget}
                        remaining={remaining}
                        expense={expense}
                    />
                </div>
            </div>
        </div>
    );
}

Expenses.propTypes = {
    statedBudget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    setRemaining: PropTypes.func.isRequired
}

export default Expenses;
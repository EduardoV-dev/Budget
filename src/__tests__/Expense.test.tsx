import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpensesForm from '../Components/ExpensesForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const addNewExpense = jest.fn();

beforeEach(() => render(
  <ExpensesForm 
    addNewExpense={addNewExpense}
  />
));

describe('<Expense /> testing', () => {
  it('render without crashing', () => {
    expect(screen.getByText('Agrega tus gastos aquí')).toBeInTheDocument();
  });
  
  it('adds a new spending to the list', () => {
    userEvent.type(screen.getByTestId('expensesform-name'), 'Food expense');
    userEvent.type(screen.getByTestId('expensesform-expense'), '1000');
    userEvent.click(screen.getByTestId('expensesform-submit'));
    expect(addNewExpense).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('error-alert')).not.toBeInTheDocument();
  });

  it('shows the error component when inputs are empty', () => {
    userEvent.click(screen.getByTestId('expensesform-submit'));
    expect(screen.queryByTestId('error-alert')).toBeInTheDocument();
  });
});
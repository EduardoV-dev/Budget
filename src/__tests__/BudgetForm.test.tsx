import React from 'react';
import { render, screen } from '@testing-library/react';
import BudgetForm from '../Components/BudgetForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const setStatedBudget = jest.fn();

beforeEach(() => render(
  <BudgetForm
    setStatedBudget={setStatedBudget}
  />)
);

describe('<BudgetForm /> works', () => {
  it('renders without crashing', () => {
    const title = screen.getByTestId('budgetform-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Coloca tu presupuesto');
  });

  it('submits the form', () => {
    userEvent.type(screen.getByTestId('budgetform-budget'), '5000');
    userEvent.click(screen.getByTestId('budgetform-submit'));
    expect(setStatedBudget).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('error-alert')).not.toBeInTheDocument();
  });
});

describe('<BudgetForm /> errors', () => {
  it('shows the error message when budget is empty', () => {
    userEvent.click(screen.getByTestId('budgetform-submit'));
    expect(screen.queryByTestId('error-alert')).toBeInTheDocument();
  });

  it('shows the error message when budget is equals to 0', () => {
    userEvent.type(screen.getByTestId('budgetform-budget'), '0');
    userEvent.click(screen.getByTestId('budgetform-submit'));
    expect(setStatedBudget).not.toHaveBeenCalled();
    expect(screen.queryByTestId('error-alert')).toBeInTheDocument();
  });

  it('shows the error message when budget is less than 0', () => {
    userEvent.type(screen.getByTestId('budgetform-budget'), '-50');
    userEvent.click(screen.getByTestId('budgetform-submit'));
    expect(setStatedBudget).not.toHaveBeenCalled();
    expect(screen.queryByTestId('error-alert')).toBeInTheDocument();
  });
});
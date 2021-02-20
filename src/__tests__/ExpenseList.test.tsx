import React from 'react';
import ExpenseList from '../Components/ExpenseList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Spending } from '../interfaces';

const statedBudget = 5000;
const remaining = 5000;
const expense: Spending[] = [
  { name: 'Food', expense: 1000, id: 1 },
  { name: 'Transport', expense: 500, id: 4 },
  { name: 'Fun', expense: 300, id: 3 },
];

beforeEach(() => render(
  <ExpenseList
    statedBudget={statedBudget}
    remaining={remaining}
    expense={expense}
  />
));

describe('<ExpenseList /> testing without crashes', () => {
  it('render without crashing', () => {
    expect(screen.getByText('Listado')).toBeInTheDocument();
  });

  it('renders the expenses correctly', async () =>
    expect(await screen.findAllByTestId('expenseitem')).toHaveLength(3)
  );

  it('renders the state of the expenses and the remaining correctly', () => {
    expect(screen.getByText(/presupuesto:/i)).toBeInTheDocument();
    expect(screen.getByText(/restante:/i)).toBeInTheDocument();
  });
});
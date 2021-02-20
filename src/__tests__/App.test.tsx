import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<App /> tests', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the title correctly', () => {
    render(<App />);
    const heading = screen.getByTestId('app-heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Gasto Semanal');
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app test', () => {
  render(<App />);
  const appElement = screen.getByTestId("app");
  expect(appElement).toBeInTheDocument();
});

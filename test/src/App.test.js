import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Susies Salad wabpage', () => {
  render(<App />);
  const linkElement = screen.getByText("Susies' Salad S-bar");
  expect(linkElement).toBeInTheDocument();
});

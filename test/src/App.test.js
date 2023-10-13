import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Susies Salad wabpage', () => {
  render(<App />);
  const linkElement = screen.getByText("Susies' Salad S-bar");
  expect(linkElement).toBeInTheDocument();
});

scribe("Feedback Form", () => {
  test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit}/>);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, {target: {value: '4' } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton),toHaveAttribute('disabled');
  })
})
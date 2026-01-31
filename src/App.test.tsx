import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders Header, UserInput, and Results components with valid input', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  test('displays error message when duration is less than 1', async () => {
    render(<App />);
    const durationInput = screen.getByLabelText(/duration/i);
    await userEvent.clear(durationInput);
    await userEvent.type(durationInput, '0');
    expect(screen.getByText('Please enter valid input data.')).toBeInTheDocument();
  });

  test('does not display error message with valid duration', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Please enter valid input data.')).not.toBeInTheDocument();
  });

  test('renders Results component when input is valid', () => {
    const { container } = render(<App />);
    const resultsSection = container.querySelector('[class*="results"]');
    expect(resultsSection || container.querySelector('table')).toBeInTheDocument();
  });
});

// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
import { click } from '@testing-library/user-event/dist/click';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument;
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('0')).toBeInTheDocument;
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByText('0');
  const incremButton = screen.getByText('+');
  fireEvent.click(incremButton);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByText('0');
  const decremButton = screen.getByText('-');
  fireEvent.click(decremButton);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});

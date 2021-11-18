import { render, screen } from '@testing-library/react';
import Greet from './components/Greet/Greet';

test('renders my name', () => {
  render(<Greet />);
  const linkElement = screen.getByText(/Scroll Down/i);
  expect(linkElement).toBeInTheDocument();
});

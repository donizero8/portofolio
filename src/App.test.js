import { render, screen } from '@testing-library/react';
import Main from './components/Main/Main';

test('renders my name', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Scroll Down/i);
  expect(linkElement).toBeInTheDocument();
});

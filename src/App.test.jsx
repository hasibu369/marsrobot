import { render, screen } from '@testing-library/react';
import App from './App';

test('renders robot grid', () => {
  render(<App />);
  const robotPosition = screen.getByText(/Robot Position : 1,1,north/i);
  expect(robotPosition).toBeInTheDocument();
});
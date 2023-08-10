import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/status board/i);
    expect(linkElement).toBeInTheDocument();
});

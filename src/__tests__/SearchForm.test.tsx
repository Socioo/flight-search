import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '@/components/SearchForm';
// If 'expect' is not defined globally, uncomment the next line:
// import { expect } from '@jest/globals';

test('submits form with entered values', () => {
  const mockSearch = jest.fn();
  render(<SearchForm onSearch={mockSearch} />);
  fireEvent.change(screen.getByPlaceholderText(/From/i), { target: { value: 'NYC' } });
  fireEvent.change(screen.getByPlaceholderText(/To/i), { target: { value: 'LAX' } });
  fireEvent.click(screen.getByText(/Search Flights/i));
  expect(mockSearch).toHaveBeenCalled();
});

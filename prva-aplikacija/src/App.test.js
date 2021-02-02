import { render, screen } from '@testing-library/react';
import App from './App';
import AppWizz from './AppWizz'

test('renders learn react link', () => {
  render(
  <App />,
  <AppWizz />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

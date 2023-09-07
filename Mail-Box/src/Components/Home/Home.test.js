import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeMessage = screen.getByText('Welcome to your mail box');
  expect(welcomeMessage).toBeInTheDocument();
});
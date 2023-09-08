import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

test('renders header component with navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Test that the logo is rendered
  const logoElement = screen.getByAltText('Space Logo');
  expect(logoElement).toBeInTheDocument();

  // Find the span element
  const spanElement = screen.getByText(/Space Traveler/i);

  // Define a regular expression to match the text content (ignoring specific characters)
  const expectedTextRegex = /Space\s*Traveler\s*&?aposs\s*Hub/i;

  // Test that the text content of the span matches the regular expression
  expect(spanElement.textContent).toMatch(expectedTextRegex);

  // Test that the navigation links are rendered
  const rocketsLink = screen.getByText('Rockets');
  const missionsLink = screen.getByText('Missions');
  const profileLink = screen.getByText('My Profile');
  
  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header';

test('renders header component with navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const logoElement = screen.getByAltText('Space Logo');
  expect(logoElement).toBeInTheDocument();

  const spanElement = screen.getByText(/Space Traveler/i);

  const expectedTextRegex = /Space\s*Traveler\s*&?aposs\s*Hub/i;

  expect(spanElement.textContent).toMatch(expectedTextRegex);

  const rocketsLink = screen.getByText('Rockets');
  const missionsLink = screen.getByText('Missions');
  const profileLink = screen.getByText('My Profile');

  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});

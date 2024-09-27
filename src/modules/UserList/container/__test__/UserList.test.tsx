import { screen } from '@testing-library/react-native';
import { delay, http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
// We're using our own custom render function and not RTL's render.
import { BASE_URL } from '@services/api';
import { renderWithProviders } from '@services/redux/utils/testingUtils';
import UserList from '../UserList.container';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(`${BASE_URL}/users`, async () => {
    await delay(150);
    return HttpResponse.json([
      {
        id: 1,
        name: 'John Smith',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ]);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives users', async () => {
  renderWithProviders(<UserList />);
  // Wait for the loader to disappear
  expect(screen.getByTestId('loader-container')).toBeTruthy();

  // Wait for the user list to appear
  expect(await screen.findByTestId(/user-list/i)).toBeTruthy();

  // Wait for the user item to appear
  expect(await screen.findByText(/John/i)).toBeTruthy();
});

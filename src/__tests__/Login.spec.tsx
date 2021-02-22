import React from 'react';
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Login from '../pages/index';

const mockedRouterPush = jest.fn();
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: mockedRouterPush,
    }),
  };
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Login Page', () => {
  beforeEach(() => {
    mockedRouterPush.mockClear();
  });
  afterEach(() => {
    useSelector.mockClear();
  });
  it('should be able to Login', async () => {
    useSelector.mockImplementation(callback => {
      return callback({
        auth: {
          token: null,
          signed: false,
          loading: false,
        },
      });
    });
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailField = getByPlaceholderText('user.name@mail.com');
    const passwordField = getByPlaceholderText('*******');
    const button = getByText('ENTRAR');
    fireEvent.change(emailField, {
      target: { value: 'ash.ketchum@pallet.com' },
    });
    fireEvent.change(passwordField, { target: { value: 'pikachu' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(emailField).toHaveValue('ash.ketchum@pallet.com');
    });
  });
  it('should show error icons', async () => {
    const { getByText } = render(<Login />);
    const button = getByText('ENTRAR');

    fireEvent.click(button);
  });
  it('should redirect to other page', async () => {
    useSelector.mockImplementation(callback => {
      return callback({
        auth: {
          token: 1,
          signed: true,
          loading: false,
        },
      });
    });
    render(<Login />);
    await waitFor(() => {
      expect(mockedRouterPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});

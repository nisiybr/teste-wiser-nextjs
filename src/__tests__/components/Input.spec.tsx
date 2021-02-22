import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FiX } from 'react-icons/fi';
import { debug } from 'console';
import Input from '../../components/Input';
import Login from '../../pages/index';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldname: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const input = getByPlaceholderText('E-mail');

    expect(input).toBeTruthy();
  });

  it('render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const input = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.focus(input);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle('border: 2px solid #989fdb;');
    });

    fireEvent.blur(input);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle('border: 1px solid #989fdb;');
    });
  });
  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );
    const input = getByPlaceholderText('E-mail');
    const inputContainer = getByTestId('input-container');

    fireEvent.change(input, {
      target: {
        value: 'ashe.lol@freljord.com',
      },
    });

    fireEvent.blur(input);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle('border: 2px solid #989fdb;');
    });
  });

  it('should present error icon ', async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" icon={FiX} placeholder="E-mail" />,
    );
    const input = getByPlaceholderText('E-mail');

    expect(input).toBeTruthy();
  });
});

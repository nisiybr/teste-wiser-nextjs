import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from '../../components/Button';

describe('Tooltip Component', () => {
  it('should be able to render button', () => {
    const { getByText } = render(<Button type="submit">ENTRAR</Button>);
    const button = getByText('ENTRAR');

    expect(button).toBeTruthy();
  });
  it('should be able to render loading button', () => {
    const { getByText } = render(
      <Button type="submit" loading>
        ENTRAR
      </Button>,
    );
    const button = getByText('CARREGANDO...');

    expect(button).toBeTruthy();
  });
});

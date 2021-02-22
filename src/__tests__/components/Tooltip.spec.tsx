import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '../../components/Tooltip';

describe('Tooltip Component', () => {
  it('should be able to render an tooltip', () => {
    const { getByText } = render(<Tooltip title="E-mail é obrigatório" />);
    const tooltip = getByText('E-mail é obrigatório');

    expect(tooltip).toBeTruthy();
  });
});

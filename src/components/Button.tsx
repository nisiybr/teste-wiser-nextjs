import React, { ButtonHTMLAttributes } from 'react';
import { Container } from '../styles/components/Button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'CARREGANDO...' : children}
  </Container>
);

export default Button;

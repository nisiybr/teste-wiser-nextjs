import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import {
  Container,
  Background,
  Content,
  Form,
  SpanWrapper,
} from '../styles/pages/Login';

import Input from '../components/Input';
import Button from '../components/Button';

import api from '../services/api';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get(`/users/1`).then(response => {
      console.log(response.data);
    });
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('Apertou botão entrar');
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <h1>Olá, seja bem-vindo!</h1>
        <p>Para acessar a plataforma, faça seu login.</p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <strong>E-MAIL</strong>
          <Input type="email" name="email" placeholder="user.name@mail.com" />
          <strong>SENHA</strong>
          <Input type="password" name="password" placeholder="*******" />
          <Button type="submit">ENTRAR</Button>
        </Form>
        <SpanWrapper>
          <span>Esqueceu seu login ou senha?</span>
          <span>
            Clique
            <Link href="/cadastro"> aqui</Link>
          </span>
        </SpanWrapper>
      </Content>
    </Container>
  );
};

export default Login;

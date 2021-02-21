import React, { useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import getValidationErrors from '../utils/getValidationErrors';
import {
  Container,
  Background,
  Content,
  Form,
  SpanWrapper,
} from '../styles/pages/Login';

import Input from '../components/Input';
import Button from '../components/Button';

import { signInRequest } from '../store/modules/auth/actions';
import { IAuth } from '../store/modules/auth/types';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();

  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();
  const { token, signed, loading } = useSelector<IAuth>(state => state.auth);

  useEffect(() => {
    console.log(`Token: ${token}, Signed: ${signed} , Loading: ${loading}`);
    if (signed) {
      router.push(`/dashboard`);
    }
  }, [token, signed, loading, router]);
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(signInRequest(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          alert('Houve um problema na autenticação.');
        }
      }
    },
    [dispatch],
  );

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
          <Button type="submit">{loading ? 'CARREGANDO...' : 'ENTRAR'}</Button>
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

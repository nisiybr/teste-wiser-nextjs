import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Background,
  Content,
  SpanWrapper,
} from '../styles/pages/Dashboard';

import Button from '../components/Button';

import { signOut } from '../store/modules/auth/actions';
import { IAuth } from '../store/modules/auth/types';
import api from '../services/api';
import { IState } from '../store';

interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({});

  const dispatch = useDispatch();
  const { loading, signed, token } = useSelector<IState, IAuth>(
    state => state.auth,
  );
  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      return;
    }
    api.get(`users/${token}`).then(response => {
      const { id, name, email } = response.data;
      setUser({
        id,
        name,
        email,
      });
    });
  }, [token]);

  useEffect(() => {
    if (!signed) {
      router.push(`/`);
    }
  }, [token, signed, loading, router]);

  return (
    <Container>
      <Background />
      <Content>
        <h1>{user.name ? `Olá ${user.name}!` : 'Carregando...'}</h1>
        <p>Para fazer o logout da aplicação</p>
        <SpanWrapper>
          <Button type="button" onClick={handleLogout}>
            Clique aqui
          </Button>
        </SpanWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;

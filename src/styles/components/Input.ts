import styled, { css } from 'styled-components';
import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 8px;
  padding: 17px;
  width: 100%;
  border: 1px solid #989fdb;

  width: 256px;
  height: 48px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border: 1px solid #ff377f;
    `}
  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #989fdb;
    `}
  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #989fdb;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #383e71;
    font-size: 10px;

    &::placeholder {
      color: #989fdb;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 26px;
  svg {
    margin: 0;
  }
  span {
    background: #ff377f;
    color: #fff;

    &::before {
      border-color: #ff377f transparent;
    }
  }
`;

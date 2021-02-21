import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  height: 4.8rem;
  border-radius: 0.8rem;
  border: 0;
  padding: 0 1.6rem;

  width: 100%;

  margin-top: 2.4rem;
  box-shadow: 0rem 1rem 2.5rem #cf99db;

  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  color: #ffffff;

  &:hover {
    background: linear-gradient(
      267.79deg,
      ${shade(0.2, '#383e71')} 0%,
      ${shade(0.2, '#9d25b0')} 99.18%
    );
  }
`;

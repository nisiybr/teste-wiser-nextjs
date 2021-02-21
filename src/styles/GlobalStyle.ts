import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  /* Estilizações Gerais */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 62.5%;
  }
  /* Configurações de Cores */
  body {
    background: #FAF5FF;
    color: #383E71;
    -webkit-font-smoothing: antialiased;
  }
  /* Fonte Padrão da aplicação */
  body, input, button {
  font-family: 'Montserrat',sans-serif;
  font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 5px;
      width: 100%
    }
`;

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    font-size: 10px;

    @media screen and (max-width: 1680px) {
      font-size: 9.5px;
    }

    @media screen and (max-width: 1366px) {
      font-size: 9px;
    }
  }

  body, input, button, textarea {
    font-family: 'Inter', 'Ubuntu', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

`;

export default GlobalStyles;

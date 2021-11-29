import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;
    background-image: linear-gradient(#0099de, #165FBE);
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #403f3e;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #FDC60A;
      border-radius: 5px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #403f3e;
  }

  #root {
    width: 100%;

    --black: #403f3e;
    --light-blue: #0099de;
    --blue: #165FBE;
    --yellow: #FDC60A;
    --green: #4BAE16;
    --light-grey: #fcfcfc;
    --grey: #f3f8f4;
    --white: #fff;
    --red: #E8073D;
  }

  .App {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

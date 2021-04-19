import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background-color: #FFF;
    -webkit-font-smothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  } 
`


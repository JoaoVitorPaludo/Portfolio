import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 5px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #AD49E1;
      border-radius: 10px;
    }
  }

  body {
    background-color: ${(props) => props.theme['background-700']};
    color: ${(props) => props.theme['base-text-color']};
    font: 1rem Merriweather;

    @media (max-width: 450px) {
      h3 {
        font-size: 1.3rem !important;
      }
      h1, span{
        font-size: 2rem !important;
      }
    }
  }
`

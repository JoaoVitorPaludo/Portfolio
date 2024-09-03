import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
            background-color: ${(props) => props.theme['background-700']};
            color: ${(props) => props.theme['base-text-color']};
            font: 1rem Merriweather ;
        }
`

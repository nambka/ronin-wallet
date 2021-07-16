import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Montserrat, -apple-system, sans-serif;
  }
  body {
    background-color: #f7f8fa;
    color: #111;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

import {css, Global} from "@emotion/react"

const style = css`
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
  }
  input {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
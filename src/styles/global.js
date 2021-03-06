import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");

html {
  font-family: "Lato", sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --background: #fff;
  --pink: #f76f8e;
  --dark-blue: #293347;
  --white: #ffffff;
  --gray: #e6ecf8;
}
`

export default GlobalStyle

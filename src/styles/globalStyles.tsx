import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --background: #121212;
  --red: #b12025;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  font: 400 14px Roboto, sans-serif;
  background: var(--background);
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}


input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button,
svg {
  cursor: pointer;
}
`;

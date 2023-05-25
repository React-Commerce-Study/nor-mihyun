import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import variables from "./styles/variables";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

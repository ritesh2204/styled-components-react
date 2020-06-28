import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./Theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme/theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

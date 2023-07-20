import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import GlobalStyle from "./assets/styles/GlobalStyle";
import {TodoProvider} from "./store/TodoContext";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
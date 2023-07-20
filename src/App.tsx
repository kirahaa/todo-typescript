import React from 'react';
import Router from "./router";
import GlobalStyle from "./assets/styles/GlobalStyle";
import {TodoProvider} from "./store/TodoContext";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Router />
    </TodoProvider>
  );
}

export default App;
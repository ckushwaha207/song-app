import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Routes from "./app/route/index";
import store from "./app/index";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

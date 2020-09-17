import React from 'react';
import './App.css';
import SimpleBreadcrumbs from "./compoments/Nav";
import Container from '@material-ui/core/Container';
import Routes from "./routers/index";
import { Provider } from 'react-redux';
import store from "./store"


function App() {
  return (
    <>
    <Container>
      <h1 className="App-header">BookStore</h1>
    <Provider store={store}>
      <SimpleBreadcrumbs/>
      <Routes />
    </Provider>
    </Container>
    </>
  );
}

export default App;

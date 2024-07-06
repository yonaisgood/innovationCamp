// import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './config/store';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;

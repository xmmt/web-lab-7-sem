import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react';
import MainCity from './MainCity';
import Cities from './Cities';
import configureStore from '../store/configureStore';

const { store, persistor } = configureStore();

const App = () => (
  <div className="container">
    <div className="jumbotron"></div>
    <MainCity />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Cities />
      </PersistGate>
    </Provider>
  </div>
);

export default App;

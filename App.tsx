import React from 'react';
import {Provider} from 'react-redux';
import {store} from './lib/core/redux/config';
import Routes from './lib/core/routes/index';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

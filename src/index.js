import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './Routes';

import store from './store'
import * as serviceWorker from './serviceWorker';
import { GlobalContainer } from './styles';

ReactDOM.render(
  <GlobalContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </GlobalContainer>, document.getElementById('root'));


serviceWorker.register();

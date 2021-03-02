import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'src/containers/App';
import ScrollToTop from 'src/components/ScrollToTop';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />

    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

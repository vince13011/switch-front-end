/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,

} from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Article from 'src/containers/Article';
import Cart from 'src/containers/Cart';
import Category from 'src/containers/Category';
import Account from 'src/containers/Account';
import Admin from 'src/containers/Admin';
import Signup from 'src/containers/Signup';
import Login from 'src/containers/Login';
import Checkout from 'src/containers/Checkout';
import LegalNotice from 'src/components/LegalNotice';
import Error from 'src/components/Error';
import About from 'src/components/About';
import Contact from 'src/components/Contact';

import Loading from './Loading';
import './style.scss';

function App({
  loading,
  loadArticles,
  loadCategories,
  logged,
}) {
  useEffect(() => {
    loadArticles();
    loadCategories();
  }, []);

  const stripePromise = loadStripe('pk_test_51ITtjSFqylvRHC31SNrW8LYUUKtyp0MUfNUAgTI3i8mC4fHXB7O5lxSlzISa5ta0KndYihXNbip2ukifjluRmY5r00QAJk4yMO');

  if (loading.articleLoading || loading.categoryLoading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Switch>
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        <Route
          exact
          path="/admin"
        >
          <Admin />
        </Route>
        <Route
          exact
          path="/article/:id"
        >
          <Article />
        </Route>
        <Route
          exact
          path="/categories/:name"
        >
          <Category />
        </Route>
        <Route
          exact
          path="/mon-compte"
        >
          <Account />
        </Route>
        <Route
          exact
          path="/checkout"
        >
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>

        </Route>
        <Route
          exact
          path="/login"
        >
          <Login />
        </Route>
        <Route
          exact
          path="/panier"
        >
          <Cart />
        </Route>
        <Route
          exact
          path="/signup"
        >
          <Signup />
        </Route>
        <Route
          exact
          path="/a-propos"
        >
          <About />
        </Route>
        <Route
          exact
          path="/mentions-legales"
        >
          <LegalNotice />
        </Route>
        <Route
          exact
          path="/contact"
        >
          <Contact />
        </Route>
        <Error />
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadArticles: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;

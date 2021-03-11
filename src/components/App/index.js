/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Article from 'src/containers/Article';
import Cart from 'src/containers/Cart';
import Category from 'src/containers/Category';
import Account from 'src/containers/Account';
import Signup from 'src/containers/Signup';
import Login from 'src/containers/Login';
import Fav from 'src/containers/Fav';
import LegalNotice from 'src/components/LegalNotice';
import Error from 'src/components/Error';
import About from 'src/components/About';
import CreateArticle from 'src/components/CreateArticle';

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
        </Route> {
          logged ? (
            <Route
              path="/favorites"
              exact
            >
              <Fav />
            </Route>
          ) : (
            <Redirect
              from="/favorites"
              to="/"
            />
          )
        }
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
          path="/a propos"
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
          path="/create-article"
        >
          <CreateArticle />
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

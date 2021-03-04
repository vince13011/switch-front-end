import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import Article from 'src/containers/Article';
import Account from 'src/components/Account';
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import Fav from 'src/containers/Fav';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({
  loading, loadArticles, loadCategories, logged,
}) {
  useEffect(() => {
    loadArticles();
    loadCategories();
  }, []);

  // const recipes = {recipes}
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {logged ? (
          <Route path="/favorites" exact>
            <Fav />
          </Route>
        ) : (
          <Redirect from="/favorites" to="/" />
        )}
        <Route
          exact
          path="/recipe/:slug"
        >
          <Article />
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
          path="/signup"
        >
          <Signup />
        </Route>
        <Error />
      </Switch>
      <Footer />
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

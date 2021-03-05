import { combineReducers } from 'redux';
import articles from './articles';
import categories from './categories';
import home from './home';
import auth from './auth';
import signup from './signup';
import cart from './cart';
import app from './app';
import menu from './menu';

const globalReducer = combineReducers({
  articles,
  home,
  auth,
  app,
  menu,
  categories,
  signup,
  cart,

});

export default globalReducer;

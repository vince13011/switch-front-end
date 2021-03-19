import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import articles from './articles';
import categories from './categories';
import home from './home';
import auth from './auth';
import signup from './signup';
import cart from './cart';
import checkout from './checkout';
import app from './app';
import menu from './menu';
import article from './article';
import admin from './admin';
import order from './order';
import createArticle from './createArticle';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart','auth'],
};
const globalReducer = combineReducers({
  articles,
  home,
  auth,
  app,
  menu,
  categories,
  signup,
  cart,
  article,
  checkout,
  admin,
  order,
  createArticle,

});

export default persistReducer(persistConfig, globalReducer);

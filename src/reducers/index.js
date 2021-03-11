import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import articles from './articles';
import categories from './categories';
import home from './home';
import auth from './auth';
import signup from './signup';
import cart from './cart';
import order from './order';
import app from './app';
import menu from './menu';
import article from './article';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
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
  order,

});

export default persistReducer(persistConfig, globalReducer);

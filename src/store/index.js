/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import reducer from 'src/reducers';
import getArticles from '../middlewares/getArticles';
import getLogin from '../middlewares/getLogin';
import getOneArticle from '../middlewares/getOneArticle';
import getCategories from '../middlewares/getCategories';
import cartChecking from '../middlewares/cartChecking';
import sendOrder from '../middlewares/sendOrder';
import getOrders from '../middlewares/getOrders';
import signup from '../middlewares/signup';
import getSizes from '../middlewares/getSizes';
import createOneArticle from '../middlewares/createOneArticle';

// creating the store,applying middlewares,wrapping into the persistor(redux-persist)

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(getCategories,
    getArticles,
    getLogin,
    signup,
    cartChecking,
    sendOrder,
    getOrders,
    getOneArticle,
    getSizes,
    createOneArticle),
));
export const persistor = persistStore(store);

export default { store, persistor };

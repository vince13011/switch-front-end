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
import signup from '../middlewares/signup';

// le store est le gardien du state
// la fonction createStore prend en argument le reducer

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(getCategories,
    getArticles,
    getLogin,
    signup,
    cartChecking,
    sendOrder,
    getOneArticle),
));
export const persistor = persistStore(store);

export default { store, persistor };

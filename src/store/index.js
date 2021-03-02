/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import getArticles from '../middlewares/getArticles';
import getLogin from '../middlewares/getLogin';
import getFavs from '../middlewares/getFavs';
import getCategories from '../middlewares/getCategories';



// le store est le gardien du state
// la fonction createStore prend en argument le reducer
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(getCategories,getArticles,getLogin,getFavs),
));

export default store;

import {
  ADD_TO_CART,
  INCREASE_QTY_ARTICLE,
  DECREASE_QTY_ARTICLE,
  REMOVE_FROM_CART,
  SET_CART_MESSAGE,
} from '../actions';

const initialState = {
  articles: [],
  count: 0,
  message: '',

};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const alreadyInCart = state.articles.find((article) => (
        article.id === action.article.id && article.size === action.size
      ));

      if (alreadyInCart) {
        return {
          ...state,
          articles: state.articles.map(
            (article) => (
              article.id === alreadyInCart.id && article.size === action.size
                ? { ...article, qty: article.qty + 1 }
                : article),
          ),
          count: state.count + 1,

        };
      }
      return {
        ...state,
        articles: [
          ...state.articles, {
            ...action.article,
            size: action.size,
            qty: 1,
          },
        ],
        count: state.count + 1,

      };
    }
    case INCREASE_QTY_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(
          (article) => (
            article.id === action.article.id && article.size === action.article.size
              ? { ...article, qty: article.qty + 1 } : article
          ),
        ),
        count: state.count + 1,
      };

    case DECREASE_QTY_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(
          (article) => {
            if (article.id === action.article.id && article.size === action.article.size) {
              return (article.qty > 0 ? { ...article, qty: article.qty - 1 } : article);
            }
            return article;
          },
        ),
        count: state.count - 1,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        articles: [
          ...state.articles.filter((article) => (
            article !== action.article)),
        ],
        count: state.count - 1,

      };

    case SET_CART_MESSAGE:
      return {

        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default cart;

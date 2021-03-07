import { ADD_TO_CART } from '../actions';

const initialState = {
  articles: [],
  count: 0,
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
              article.id === alreadyInCart.id ? { ...article, qty: article.qty + 1 } : article),
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
    default:
      return state;
  }
};

export default cart;

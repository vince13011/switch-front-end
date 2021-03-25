import {
  ADD_TO_CART,
  INCREASE_QTY_ARTICLE,
  DECREASE_QTY_ARTICLE,
  REMOVE_FROM_CART,
  SET_CART_MESSAGE,
  CHECKED_CART,
  RESET_CART,
} from '../actions';

const initialState = {
  articles: [],
  count: 0,
  message: '',
  checkedCart: false,

};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    /* in the actions below, i always compare article.id AND article.size,
     if they are the same => only one entry in the cart , if they are different,
     (ex:same id but different size) <= 2 entries in the cart */

    case ADD_TO_CART: {
    /* checking if same article with same size is already in the cart */

      const alreadyInCart = state.articles.find((article) => (
        article.id === action.article.id && article.size === action.size
      ));
      /* in this case I just increase the qty :
       mapping articles, changing qty of targeted element */

      if (alreadyInCart) {
        return {
          ...state,
          articles: state.articles.map(
            (article) => (
              article.id === alreadyInCart.id && article.size === action.size
                ? { ...article, qty: article.qty + 1 }
                : article),
          ),
          // increase the small counter;
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
      /* mapping articles, is target article's qty >1 ? if yes i decrease , if no i do nothing */
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
      /* to remove article from cart,
      I make article.state = everything but the article i want to remove */

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
    case CHECKED_CART:
      return {
        ...state,
        checkedCart: action.status,
      };
    case RESET_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default cart;

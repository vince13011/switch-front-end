import { ADD_TO_CART } from '../actions';

const initialState = {
  articles: [],
  count: 0,
};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        articles: [
          ...state.articles, {
            ...action.article,
            size: action.size,
            qty:1,
          },
        ],
        count: state.count + 1,

      };

    default:
      return state;
  }
};

export default cart;

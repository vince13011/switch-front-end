import { ADD_TO_CART } from '../actions';

const initialState = [];

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state, action.article,
      ];

    default:
      return state;
  }
};

export default cart;

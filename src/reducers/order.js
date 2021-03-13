import {SAVE_ONE_ORDER} from 'src/actions';

const initialState = {
  order: {},
};

const Order = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ONE_ORDER:
      return {
        ...state, order: action.order,
      };
    default:
      return state;
  }
};

export default Order;

import { GET_ALL_ORDERS_FROM_API, SAVE_ADMIN_ORDERS } from '../actions';

const initialState = {
  orders: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ADMIN_ORDERS:
      return {
        ...state,
        orders:
          action.orders,
      };
    default:
      return state;
  }
};

export default reducer;

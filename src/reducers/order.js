import { ORDER_IS_LOADING } from '../actions';

const initialState = {
  loading: false,
  success: false,
};

const order = (state = initialState, action = {}) => {
  switch (action.type) {
    case ORDER_IS_LOADING:
      return {
        ...state, loading: action.status,
      };
    default:
      return state;
  }
};

export default order;

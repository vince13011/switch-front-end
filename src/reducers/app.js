import { IS_LOADING } from 'src/actions';

const initialState = {
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

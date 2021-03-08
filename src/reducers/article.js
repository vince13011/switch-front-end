import { SET_SIZE_VALUE } from '../actions';

const initialState = {
  size: '',
};

const article = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIZE_VALUE:
      return {
        ...state,
        size: action.size,
      };

    default:
      return state;
  }
};

export default article;

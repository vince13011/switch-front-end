import { SAVE_SIZES, NEW_SELECTED_SIZE } from '../actions';

const initialState = {
  selectedSizes: [],
};

const createArticle = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SIZES:
      return {
        ...state, sizes: action.sizes,
      };
    case NEW_SELECTED_SIZE:
      return {
        ...state,
        selectedSizes: [
          ...state.selectedSizes,
          { size_name: action.size, stock: 0 },
        ],
      };
    default:
      return state;
  }
};

export default createArticle;

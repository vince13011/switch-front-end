import {
  SAVE_SIZES,
  NEW_SELECTED_SIZE,
  SET_SELECTED_SIZE_QTY,
  SET_CREATE_ARTICLE_INPUT_VALUE,
  ADD_SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
} from '../actions';

const initialState = {
  selectedSizes: [],
  selectedCategories: [],
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
    case SET_SELECTED_SIZE_QTY:

      return {
        ...state,
        selectedSizes: state.selectedSizes.map(
          (size) => (
            size.size_name === action.name
              ? { ...size, stock: action.value }
              : size),
        ),
      };
    case SET_CREATE_ARTICLE_INPUT_VALUE:
      return {
        ...state, [action.name]: action.value,

      };
    case ADD_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategories: [
          ...state.selectedCategories, action.name,
        ],
      };
    case REMOVE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategories: state.selectedCategories.filter(
          (category) => category !== action.name,
        ),
      };
    default:
      return state;
  }
};

export default createArticle;

import { SAVE_SIZES,
  NEW_SELECTED_SIZE,
  SET_SELECTED_SIZE_QTY,
  SET_CREATE_ARTICLE_INPUT_VALUE,
} from '../actions';

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
    default:
      return state;
  }
};

export default createArticle;

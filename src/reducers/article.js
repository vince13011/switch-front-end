import {
  ARTICLE_IS_LOADING,
  SAVE_ONE_ARTICLE,
  SET_SIZE_VALUE,
  SET_MODIFY_ARTICLE_SIZE_VALUE,
  SET_MODIFY_ARTICLE_INPUT_VALUE,
  SET_ARTICLE_MESSAGE,
} from '../actions';

const initialState = {
  article: [],
  size: '',
  isLoading: false,
  message: '',
};

const article = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIZE_VALUE:
      return {
        ...state,
        size: action.size,
      };
    case ARTICLE_IS_LOADING:
      return {
        ...state, isLoading: action.status,
      };
    case SAVE_ONE_ARTICLE:
      return { ...state, article: action.article };
    default:
      return state;
    case SET_MODIFY_ARTICLE_SIZE_VALUE:
      return {
        ...state,
        article: {
          ...state.article,
          sizes: state.article.sizes.map(
            (size) => (
              size.size_name === action.name
                ? {
                  ...size,
                  article_has_size: {
                    ...size.article_has_size, stock: Number(action.value),

                  },
                }
                : size
            ),
          ),
        },

      };
    case SET_MODIFY_ARTICLE_INPUT_VALUE:
      return {
        ...state,
        article: {
          ...state.article, [action.name]: action.value,
        },
      };
    case SET_ARTICLE_MESSAGE:
      return {
        ...state, message: action.message,
      };
  }
};

export default article;

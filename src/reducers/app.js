import { ARTICLE_LOADED, CATEGORY_LOADED } from 'src/actions';

const initialState = {
 // monting the app after articles and categories are loaded;
  loading: {
    articleLoading: false,
    categoryLoading: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ARTICLE_LOADED:
      return {
        ...state,
        loading: { ...state.loading, articleLoading: false },
      };
    case CATEGORY_LOADED:

      return {
        ...state,
        loading: { ...state.loading, categoryLoading: false },
      };

    default:
      return state;
  }
};

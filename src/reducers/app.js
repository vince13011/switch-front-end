import { ARTICLE_LOADED, CATEGORY_LOADED } from 'src/actions';

const initialState = {
  
  loading: {
    articleLoading: true,
    categoryLoading: true,
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
      console.log({ ...state.loading });
      return {
        ...state,
        loading: { ...state.loading, categoryLoading: false },
      };

    default:
      return state;
  }
};

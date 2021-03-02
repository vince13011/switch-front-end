import { SAVE_ARTICLES} from 'src/actions';

export const initialState = [];

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ARTICLES:
      return [...action.articles,
      ];

    default:
      return state;
  }
};

export default recipes;

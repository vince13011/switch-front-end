import { SAVE_CATEGORIES} from 'src/actions';

export const initialState = [];

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return [...action.categories,
      ];

    default:
      return state;
  }
};

export default recipes;

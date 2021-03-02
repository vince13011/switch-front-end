import {
  SET_INPUT_VALUE,
  SET_LOGIN_TRUE,
  LOGOUT,
  SAVE_FAVS,
} from '../actions';

export const initialState = {
  email: 'acidman@herocorp.io',
  password: 'fructis',
  favorites: [],
  logged: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_LOGIN_TRUE:
      return {
        ...state, ...action.authObject,
      };
    case LOGOUT:
      return {
        ...initialState,
      };

    case SAVE_FAVS:
      return {
        ...state, favorites: action.favorites,
      };
    default:
      return state;
  }
};

export default auth;

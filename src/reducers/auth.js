import {
  SET_LOGIN_INPUT_VALUE,
  SET_LOGIN_TRUE,
  LOGOUT,
  AUTH_IS_LOADING,
} from '../actions';

export const initialState = {
  email: 'jeanD@gmail.com',
  password: 'czieuze113',
  logged: false,
  AuthIsLoading: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_IS_LOADING:
      return {
        ...state,
        AuthIsloading: action.status,
      };

    case SET_LOGIN_INPUT_VALUE:
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

    default:
      return state;
  }
};

export default auth;

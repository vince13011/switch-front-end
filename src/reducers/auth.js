import {
  SET_LOGIN_INPUT_VALUE,
  SET_LOGIN_TRUE,
  LOGOUT,
  AUTH_IS_LOADING,
  SAVE_ALL_USER_ORDERS,
  TOGGLE_ADMIN,
} from '../actions';

export const initialState = {
  email: 'toto@tata.fr',
  password: '123456789',
  logged: false,
  AuthIsLoading: false,
  admin: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_IS_LOADING:
      return {
        ...state,
        AuthIsLoading: action.status,
      };

    case SET_LOGIN_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_LOGIN_TRUE:
      return {
        ...state,
        ...action.authObject,
        logged: true,

      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case SAVE_ALL_USER_ORDERS:
      return {
        ...state, orders: action.orders,

      };
    case TOGGLE_ADMIN:
      return {
        ...state, admin: !state.admin,
      };
    default:
      return state;
  }
};

export default auth;

import {
  SET_LOGIN_INPUT_VALUE,
  SET_LOGIN_TRUE,
  LOGOUT,
  AUTH_IS_LOADING,
  SAVE_ALL_USER_ORDERS,
  SET_ADMIN_TRUE,
  SET_LOGIN_MESSAGE,
} from '../actions';

export const initialState = {
  email: '',
  password: '',
  logged: false,
  AuthIsLoading: false,
  admin: false,
  message: '',
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
        // using [action.name] to get one dynamic action.
        ...state,
        [action.name]: action.value,
      };
    case SET_LOGIN_TRUE: {
      delete state.email;
      // deleting password from the state after loggin is accepted by the Api
      delete state.password;
      return {
        ...state,
        ...action.authObject,
        logged: true,

      }; }
    case LOGOUT:
      // returning initial state, is the most efficient way to logout
      return {
        ...initialState,
      };
    case SAVE_ALL_USER_ORDERS:
      return {
        ...state, orders: action.orders,

      };
    case SET_ADMIN_TRUE:
      return {
        ...state, admin: true,
      };

    case SET_LOGIN_MESSAGE:
      return {
        ...state, message: action.message,
      };
    default:
      return state;
  }
};

export default auth;

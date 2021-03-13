import {
  SET_LOGIN_INPUT_VALUE,
  SET_LOGIN_TRUE,
  LOGOUT,
  AUTH_IS_LOADING,
  SAVE_ALL_USER_ORDERS,
} from '../actions';

export const initialState = {
  email: 'kevdiddnc@javascript.fr',
  password: 'azertuiop',
  logged: false,
  AuthIsLoading: false,
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
    default:
      return state;
  }
};

export default auth;

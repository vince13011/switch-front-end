export const GET_ARTICLES_FROM_API = 'GET_ARTICLES_FROM_API';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const SET_LOGIN_INPUT_VALUE = 'SET_LOGIN_INPUT_VALUE';
export const SET_SIGNUP_INPUT_VALUE = 'SET_SIGNUP_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_LOGIN_TRUE = 'SET_LOGIN_TRUE';
export const AUTH_IS_LOADING = 'AUTH_IS_LOADING';
export const GET_FAVS = 'GET_FAVS';
export const SAVE_FAVS = 'SAVE_FAVS';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ARTICLE_LOADED = 'ARTICLE_LOADED';
export const CATEGORY_LOADED = 'CATEGORY_LOADED';
export const SET_SIZE_VALUE = 'SET_SIZE_VALUE';
export const SIGNUP = 'SIGNUP';
export const SET_SIGNUP_MESSAGE = 'SET_SIGNUP_MESSAGE';
export const SET_SIGNUP_SUCCESS = 'SET_SIGNUP_SUCCESS';

export const signup = () => ({
  type: SIGNUP,
});

export const setSignupMessage = (message) => ({
  type: SET_SIGNUP_MESSAGE,
  message,
});

export const setSignupSuccess = (status) => ({
  type: SET_SIGNUP_SUCCESS,
  status,
});

export const authIsLoading = (status) => ({
  type: AUTH_IS_LOADING,
  status,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,

});

export const setSizeValue = (size) => ({
  type: SET_SIZE_VALUE,
  size,
});

export const articleLoaded = () => ({
  type: ARTICLE_LOADED,
});

export const categoryLoaded = () => ({
  type: CATEGORY_LOADED,
});

export const getAllArticles = () => ({
  type: GET_ARTICLES_FROM_API,
});

export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});

export const addToCart = (article, size) => ({
  type: ADD_TO_CART,
  article,
  size,
});

export const getAllCategories = () => ({
  type: GET_CATEGORIES_FROM_API,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const setLoginInputValue = (value, name) => ({
  type: SET_LOGIN_INPUT_VALUE,
  value,
  name,
});
export const setSignupInputValue = (value, name) => ({
  type: SET_SIGNUP_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,

});
export const logout = () => ({
  type: LOGOUT,

});

export const setLoginTrue = (authObject) => ({
  type: SET_LOGIN_TRUE,
  authObject,

});

export const fetchFavs = () => ({
  type: GET_FAVS,

});

export const saveFavs = ({ favorites }) => ({
  type: SAVE_FAVS,
  favorites,

});

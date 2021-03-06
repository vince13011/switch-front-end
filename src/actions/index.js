// Articles Actions
export const GET_ARTICLES_FROM_API = 'GET_ARTICLES_FROM_API';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE';
export const SAVE_ONE_ARTICLE = 'SAVE_ONE_ARTICLE';

export const ARTICLE_LOADED = 'ARTICLE_LOADED';
export const SET_MODIFY_ARTICLE_SIZE_VALUE = 'SET_MODIFY_ARTICLE_SIZE_VALUE';
export const CREATE_ONE_ARTICLE = 'CREATE_ONE_ARTICLE';
export const SET_MODIFY_ARTICLE_INPUT_VALUE = 'SET_MODIFY_ARTICLE_INPUT_VALUE';
export const MODIFY_ARTICLE = 'MODIFY_ARTICLE';
export const DELETE_ONE_ARTICLE = 'DELETE_ONE_ARTICLE';
export const SET_ARTICLE_MESSAGE = 'SET_ARTICLE_MESSAGE';
export const SET_CREATE_ARTICLE_INPUT_VALUE = 'SET_CREATE_ARTICLE_INPUT_VALUE';

export const modifyArticle = () => ({
  type: MODIFY_ARTICLE,
});

export const setModifyArticleInputValue = (value, name) => ({
  type: SET_MODIFY_ARTICLE_INPUT_VALUE,
  value,
  name,
});

export const setModifyArticleSizeValue = (value, name) => ({
  type: SET_MODIFY_ARTICLE_SIZE_VALUE,
  value,
  name,
});
export const createOneArticle = () => ({
  type: CREATE_ONE_ARTICLE,
});

export const setArticleMessage = (message) => ({
  type: SET_ARTICLE_MESSAGE,
  message,
});

export const deleteOneArticle = (history) => ({
  type: DELETE_ONE_ARTICLE,
  history,
});

export const setCreateArticleInputValue = (value, name) => ({
  type: SET_CREATE_ARTICLE_INPUT_VALUE,
  name,
  value,
});

export const articleLoaded = () => ({
  type: ARTICLE_LOADED,
});

export const getAllArticles = () => ({
  type: GET_ARTICLES_FROM_API,
});

export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});

export const getOneArticle = (id, history) => ({
  type: GET_ONE_ARTICLE,
  id,
  history,

});

export const saveOneArticle = (article) => ({
  type: SAVE_ONE_ARTICLE,
  article,
});

// Sizes Actions
export const GET_SIZES_FROM_API = 'GET_SIZES_FROM_API';
export const SAVE_SIZES = 'SAVE_SIZES';
export const NEW_SELECTED_SIZE = ' NEW_SELECTED_SIZE ';
export const SET_SIZE_VALUE = 'SET_SIZE_VALUE';
export const SET_SELECTED_SIZE_QTY = 'SET_SELECTED_SIZE_QTY';

export const setSelectedSizeQty = (value, name) => ({
  type: SET_SELECTED_SIZE_QTY,
  name,
  value,
});

export const newSelectedSize = (size) => ({
  type: NEW_SELECTED_SIZE,
  size,
});

export const setSizeValue = (size) => ({
  type: SET_SIZE_VALUE,
  size,
});

export const getAllSizes = () => ({
  type: GET_SIZES_FROM_API,
});

export const saveSizes = (sizes) => ({
  type: SAVE_SIZES,
  sizes,
});

// Categories Action

export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CATEGORY_LOADED = 'CATEGORY_LOADED';

export const categoryLoaded = () => ({
  type: CATEGORY_LOADED,
});

export const getAllCategories = () => ({
  type: GET_CATEGORIES_FROM_API,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

// Cart Actions

export const CHECKING_STOCK_FROM_API = 'CHECKING_STOCK_FROM_API';
export const CHECKED_CART = 'CHECKED_CART';
export const RESET_CART = 'RESET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_MESSAGE = 'SET_CART_MESSAGE';
export const INCREASE_QTY_ARTICLE = 'INCREASE_QTY_ARTICLE';
export const DECREASE_QTY_ARTICLE = 'DECREASE_QTY_ARTICLE';

export const checkingStock = (articles) => ({
  type: CHECKING_STOCK_FROM_API,
  articles,
});

export const checkedCart = (status) => ({
  type: CHECKED_CART,
  status,
}
);
export const addToCart = (article, size) => ({
  type: ADD_TO_CART,
  article,
  size,
});

export const removeFromCart = (article) => ({
  type: REMOVE_FROM_CART,
  article,

});

export const setCartMessage = (message) => ({
  type: SET_CART_MESSAGE,
  message,

});

export const increaseQuantity = (article) => ({
  type: INCREASE_QTY_ARTICLE,
  article,
});

export const decreaseQuantity = (article) => ({
  type: DECREASE_QTY_ARTICLE,
  article,
});

export const resetCart = () => ({
  type: RESET_CART,
});

// Order Action

export const GET_ALL_ORDERS_FROM_API = 'GET_ALL_ORDERS_FROM_API';
export const SAVE_ADMIN_ORDERS = 'SAVE_ADMIN_ORDERS';
export const GET_ONE_ORDER_FROM_API = 'GET_ONE_ORDER_FROM_API';
export const SAVE_ONE_ORDER = 'SAVE_ONE_ORDER';
export const GET_ALL_USER_ORDERS = 'GET_ALL_USER_ORDERS';
export const SAVE_ALL_USER_ORDERS = 'SAVE_ALL_USER_ORDERS';
export const ADMIN_ORDERS_LOADING = 'ADMIN_ORDERS_LOADING';
export const MODIFY_ONE_ORDER = 'MODIFY_ONE_ORDER';
export const GET_ORDER_STATUS_FROM_API = 'GET_ORDER_STATUS_FROM_API';
export const SAVE_ORDER_STATUS = 'SAVE_ORDER_STATUS';
export const SET_ORDER_INPUT_VALUE = 'SET_ORDER_INPUT_VALUE';
export const SEND_ORDER = 'SEND_ORDER';
export const SET_ORDER_LOADING = 'SET_ORDER_LOADING:';

export const setOrderInputValue = (value, name) => ({
  type: SET_ORDER_INPUT_VALUE,
  value,
  name,
});
export const saveOrderStatus = (status) => ({
  type: SAVE_ORDER_STATUS,
  status,
});

export const getOrderStatus = () => ({
  type: GET_ORDER_STATUS_FROM_API,
});

export const modifyOneOrder = (status, tracking = '') => ({
  type: MODIFY_ONE_ORDER,
  status,
  tracking,
});

export const adminOrdersLoading = (status) => ({
  type: ADMIN_ORDERS_LOADING,
  status,
});

export const saveAdminOrders = (orders) => ({
  type: SAVE_ADMIN_ORDERS,
  orders,

});

export const saveOneOrder = (order) => ({
  type: SAVE_ONE_ORDER,
  order,

});

export const getOneOrder = (id, history) => ({
  type: GET_ONE_ORDER_FROM_API,
  id,
  history,
});

export const getAllOrders = () => ({
  type: GET_ALL_ORDERS_FROM_API,
});

export const getAllUserOrders = () => ({
  type: GET_ALL_USER_ORDERS,

});
export const saveAllUserOrders = (orders) => ({
  type: SAVE_ALL_USER_ORDERS,
  orders,
});

export const sendOrder = (paymentResult, total) => ({
  type: SEND_ORDER,
  paymentResult,
  total,
});

export const setOrderLoading = (status) => ({
  type: SET_ORDER_LOADING,
  status,
});

// auth Action

export const SET_LOGIN_INPUT_VALUE = 'SET_LOGIN_INPUT_VALUE';
export const SET_SIGNUP_INPUT_VALUE = 'SET_SIGNUP_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_LOGIN_TRUE = 'SET_LOGIN_TRUE';
export const SIGNUP = 'SIGNUP';
export const SET_SIGNUP_MESSAGE = 'SET_SIGNUP_MESSAGE';
export const SET_SIGNUP_SUCCESS = 'SET_SIGNUP_SUCCESS';
export const SET_LOGIN_MESSAGE = 'SET_LOGIN_MESSAGE';
export const SET_ADMIN_TRUE = 'SET_ADMIN_TRUE';

export const setLogginMessage = (message) => ({
  type: SET_LOGIN_MESSAGE,
  message,
});

export const setAdminTrue = () => ({
  type: SET_ADMIN_TRUE,
});

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

// LOADING Actions
export const AUTH_IS_LOADING = 'AUTH_IS_LOADING';
export const SET_ADMIN_LOADING = 'SET_ADMIN_LOADING:';
export const SET_CHECKOUT_LOADING = 'SET_CHECKOUT_LOADING';
export const ARTICLE_IS_LOADING = 'ARTICLE_IS_LOADING';

export const articleLoading = (status) => ({
  type: ARTICLE_IS_LOADING,
  status,

});

export const setCheckoutLoading = (status) => ({
  type: SET_CHECKOUT_LOADING,
  status,
});

export const setAdminLoading = (status) => ({

  type: SET_ADMIN_LOADING,
  status,
});

export const authIsLoading = (status) => ({
  type: AUTH_IS_LOADING,
  status,
});

// others
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const SET_CHECKOUT_SUCCESS = 'SET_CHECKOUT_SUCCESS';

export const ADD_SELECTED_CATEGORY = 'ADD_SELECTED_CATEGORY';
export const REMOVE_SELECTED_CATEGORY = 'REMOVE_SELECTED_CATEGORY';
export const SET_SELECTED_IMAGE = 'SET_SELECTED_IMAGE';

export const setSelectedImage = (url) => ({
  type: SET_SELECTED_IMAGE,
  url,
});

export const addSelectedCategory = (name) => ({
  type: ADD_SELECTED_CATEGORY,
  name,
});

export const removeSelectedCategory = (name) => ({
  type: REMOVE_SELECTED_CATEGORY,
  name,
});

export const setCheckoutSuccess = (status) => ({
  type: SET_CHECKOUT_SUCCESS,
  status,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,

});

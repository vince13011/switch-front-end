import { TOGGLE_MENU } from '../actions';

const initialState = {
  showMenu: false,
};

const menu = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    default:
      return state;
  }
};

export default menu;

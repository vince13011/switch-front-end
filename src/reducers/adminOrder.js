const initialState = {
  order: {},
};

const adminOrder = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ONE_ORDER:
      return {
        ...state, order: action.order,
      };
    default:
      return state;
  }
};

export default adminOrder;

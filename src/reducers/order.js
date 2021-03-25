import { SAVE_ONE_ORDER, SAVE_ORDER_STATUS, SET_ORDER_INPUT_VALUE ,SET_ORDER_LOADING} from 'src/actions';

const initialState = {
  order: {},
  status: [],
  form: {
    modifiedTracking: '',
    modifiedStatus: '',
  },
  isLoading: false,
};

const Order = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ONE_ORDER:
      return {
        ...state, order: action.order,
      };
    case SAVE_ORDER_STATUS:
      return {
        ...state, status: action.status,
      };
    case SET_ORDER_INPUT_VALUE:
      return {
        ...state,
        form: { ...state.form, [action.name]: action.value },
      };
    case SET_ORDER_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};

export default Order;

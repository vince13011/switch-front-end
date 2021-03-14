import { SAVE_ONE_ORDER, SAVE_ORDER_STATUS ,SET_ORDER_INPUT_VALUE} from 'src/actions';

const initialState = {
  order: {},
  status: [],
  form: {
    modifiedTracking: '',
    modifiedStatus: '',
  },
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
    default:
      return state;
  }
};

export default Order;

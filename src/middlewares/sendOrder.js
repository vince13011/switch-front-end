import {
  SEND_ORDER,orderIsLoading,
} from 'src/actions';
import axios from 'axios';


const sendOrder = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ORDER: {
      const postOrder = async () => {
        try {
          store.dispatch(orderIsLoading(true));
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/order', {
            email: store.getState().auth.email,
            password: store.getState().auth.password,
          });

          store.dispatch(setSuccessOrder(true));
          store.dispatch(orderIsLoading(false));
        }
        catch (error) {
          console.log(error);
        }
      };
      postOrder();
    }

      break;
    default:
      next(action);
  }
};

export default sendOrder;

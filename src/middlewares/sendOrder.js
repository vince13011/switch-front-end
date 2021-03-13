import {
  SEND_ORDER,
  orderIsLoading,
  setOrderSuccess,
} from 'src/actions';
import axios from 'axios';

const sendOrder = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ORDER: {
      const postOrder = async () => {
        try {
          if (action.paymentResult.error) {
            return console.log('mw', action.paymentResult.error.message);
          }
          console.log()
          store.dispatch(orderIsLoading(true));
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/order', {

            user_id: store.getState().auth.user.id,
            address_id: 13,
            total_price: (action.paymentResult.paymentIntent.amount/100).toString(),
            articles: [
              {
                article_id: 4,
                size: "M",
                quantity: 10,
                unit_net_price: 10,
              },
              {
                article_id: 4,
                size: "L",
                quantity: 10,
                unit_net_price: 10,
              },

            ],
          });
          console.log(response.data);
          store.dispatch(setOrderSuccess(true))
          store.dispatch(emptyCart()); //TODO
          store.dispatch(orderIsLoading(false));
        }
        catch (error) {
          console.log(error);
          store.dispatch(orderIsLoading(false));
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

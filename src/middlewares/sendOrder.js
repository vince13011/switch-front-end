import {
  SEND_ORDER,
  setCheckoutLoading,
  setCheckoutSuccess,
} from 'src/actions';
import axios from 'axios';

const sendOrder = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ORDER: {
      const postOrder = async () => {
        try {
          // request only if payment is a success
          if (action.paymentResult.error) {
            return console.log('mw', action.paymentResult.error.message);
          }
          // formating the order's articles  in the good shape for the API;
          const { articles } = store.getState().cart;
          const parsedArticle = articles.map((article) => ({
            article_id: article.id,
            unit_net_price: article.pre_tax_price,
            sizes: {
              size: article.size,
              quantity: article.qty,
            },
          }));
          const { token } = store.getState().auth;// user token needed
          store.dispatch(setCheckoutLoading(true));
          await axios.post('https://switch-ecommerce.herokuapp.com/v1/order', {

            user_id: store.getState().auth.user.id,
            address_id: store.getState().auth.address.id,
            total_price: (action.paymentResult.paymentIntent.amount / 100).toString(),
            articles: parsedArticle,

          }, { headers: { Authorization: `Bearer ${token}` } });

          store.dispatch(setCheckoutSuccess(true));

          store.dispatch(setCheckoutLoading(false));
        }
        catch (error) {
          console.log(error);
          store.dispatch(setCheckoutLoading(false));
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

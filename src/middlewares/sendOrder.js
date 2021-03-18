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
          if (action.paymentResult.error) {
            return console.log('mw', action.paymentResult.error.message);
          }
          const { articles } = store.getState().cart;
          const parsedArticle = articles.map((article) => ({
            article_id: article.id,
            unit_net_price: article.pre_tax_price,
            sizes: {
              size: article.size,
              quantity: article.qty,
            },
          }));
          const { token } = store.getState().auth;
          store.dispatch(setCheckoutLoading(true));
          const response = await axios.post('https://switch-e-commerce.herokuapp.com/v1/order', {

            user_id: store.getState().auth.user.id,
            address_id: store.getState().auth.address.id,
            total_price: (action.paymentResult.paymentIntent.amount / 100).toString(),
            articles: parsedArticle,

          }, { headers: { Authorization: `Bearer ${token}` } });
          
          console.log(response.data);
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

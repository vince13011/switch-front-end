import { GET_ALL_ORDERS_FROM_API,GET_ONE_ORDER_FROM_API,saveAdminOrders, adminOrdersLoading } from 'src/actions';
import axios from 'axios';

const getOrders = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_FROM_API:
      store.dispatch(adminOrdersLoading(true));
      axios.get('https://switch-e-commerce.herokuapp.com/v1/orders')
        .then(
          (response) => {
            const orders = response.data;
            store.dispatch(saveAdminOrders(orders));
            store.dispatch(adminOrdersLoading(false));
          },
        ).catch((err) => console.log(err))
        .finally();

      break;
    case GET_ONE_ORDER_FROM_API:

      axios.get(`https://switch-e-commerce.herokuapp.com/v1/order/${action.id}`)
        .then(
          (response) => {
            const order = response.data;
            store.dispatch(saveOneAdminOrder(orders))
          },
        );

    default:
      next(action);
  }
};

export default getOrders;

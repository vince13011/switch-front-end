import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Order from 'src/components/Order';
import { sendOrder, checkedCart } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => {
  let total = 0;
  state.cart.articles.forEach((article) => {
    total += article.qty * article.pre_tax_price;
  });

  return {
    articles: state.cart.articles,
    total,
    loading: state.order.loading,
    user: state.auth.user,
    address: state.auth.address,
    logged: state.auth.logged,
    isCheckedCart: state.cart.checkedCart,
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

  onClick: (paymentResult) => {
    dispatch(sendOrder(paymentResult));
  },
  removeCartStatus: () => {
    dispatch(checkedCart(false));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Order);
export default withRouter(connected);

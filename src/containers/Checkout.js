import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Checkout from 'src/components/Checkout';
import { sendOrder, checkedCart } from 'src/actions';

import getIncludingVATprice from 'src/selectors/getIncludingVATprice';

const mapStateToProps = (state) => {
  /* calculating the total of the cart here */
  let total = 0;
  state.cart.articles.forEach((article) => {
    total += getIncludingVATprice(article.pre_tax_price, article.vat_rate) * article.qty;
  });


  return {
    articles: state.cart.articles,
    total,
    isLoading: state.checkout.isLoading,
    user: state.auth.user,
    address: state.auth.address,
    logged: state.auth.logged,
    isCheckedCart: state.cart.checkedCart,
    success: state.checkout.success,
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

const connected = connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default withRouter(connected);

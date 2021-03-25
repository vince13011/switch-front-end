import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from 'src/components/Cart';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  checkingStock,
  setCartMessage,
} from 'src/actions';

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
    isCheckedCart: state.cart.checkedCart,
    message: state.cart.message,

  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlusClick: (article) => {
    dispatch(increaseQuantity(article));
  },
  onLessClick: (article) => {
    dispatch(decreaseQuantity(article));
  },
  onRemoveClick: (article) => {
    dispatch(removeFromCart(article));
  },
  checkingCart: (articles) => {
    dispatch(checkingStock(articles));
  },
  removeCartMessage: () => {
    dispatch(setCartMessage(''));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Cart);

/* using withRouter to get OwnProps */
export default withRouter(connected);

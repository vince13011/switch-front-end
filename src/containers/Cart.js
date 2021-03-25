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

const mapStateToProps = (state) => {
  /* calculating the total of the cart here */
  let total = 0;
  state.cart.articles.forEach((article) => {
    total += article.qty * article.pre_tax_price;
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

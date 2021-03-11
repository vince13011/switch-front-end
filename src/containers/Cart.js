import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from 'src/components/Cart';
import { increaseQuantity, decreaseQuantity, removeFromCart } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.cart.articles,
});

// branchement en écriture du state
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
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default withRouter(connected);

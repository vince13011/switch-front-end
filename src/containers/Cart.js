import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from 'src/components/Cart';
import { increaseQuantity, decreaseQuantity } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.cart.articles,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onPlusClick: (article) => {
    console.log(article);
    dispatch(increaseQuantity(article));
  },
  onLessClick: (article) => {
    console.log('onless');
    dispatch(decreaseQuantity(article));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default withRouter(connected);

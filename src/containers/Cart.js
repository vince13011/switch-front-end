import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from 'src/components/Cart';
import { increaseQuantity, decreaseQuantity, removeFromCart, checkingStock} from 'src/actions';


// branchement en lecture du state
const mapStateToProps = (state) => {
  let total = 0;
  state.cart.articles.forEach((article) => {
    total += article.qty * article.pre_tax_price;
  });

  return {
    articles: state.cart.articles,
    total,
    cartChecked: false,
    message: state.cart.message,
    
  };
};

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
  checkingCart:(articles)=>{
    dispatch(checkingStock(articles))
  }
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default withRouter(connected);

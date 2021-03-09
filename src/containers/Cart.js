import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from 'src/components/Cart';


// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.cart.articles,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
 
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default withRouter(connected);

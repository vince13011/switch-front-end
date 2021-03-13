import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Order from 'src/components/Order';
import { getOneOrder} from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  order: state.order.order,
  articles: state.order.order.orderArticles
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch, ownProps) => ({

  loadOrder: () => {
    const { id } = ownProps.match.params;
    dispatch(getOneOrder(id));
  },
 
});

const connected= connect(mapStateToProps, mapDispatchToProps)(Order);
export default withRouter(connected);
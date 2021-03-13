import { connect } from 'react-redux';
import AdminOrder from 'src/components/AdminOrder';
import { getOneOrder} from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  order: state.adminOrder.order,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch, ownProps) => ({

  loadOrder: () => {
    const { id } = ownProps.match.params;
    dispatch(getOneOrder(id));
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrder);

import { connect } from 'react-redux';
import Admin from 'src/components/Admin';
import { getAllOrders } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  orders: state.admin.orders,
  unTreatedOrders: state.admin.orders,
  ordersloading: state.admin.loading,
  admin: state.auth.logged,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

  loadOrders: () => {
    dispatch(getAllOrders());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

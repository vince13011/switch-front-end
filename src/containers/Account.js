import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Account from 'src/components/Account';
import { logout, getAllUserOrders } from 'src/actions/';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  user: state.auth.user,
  address: state.auth.address,
  logged: state.auth.logged,
  orders: state.auth.orders,
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  loadOrders: () => {
    dispatch(getAllUserOrders());
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Account);
export default withRouter(connected);

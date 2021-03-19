import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Order from 'src/components/Order';
import {
  getOneOrder, getOrderStatus, setOrderInputValue, modifyOneOrder,
} from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  order: state.order.order,
  address: state.order.order.address,
  status: state.order.status,
  modifiedTracking: state.order.form.modifiedTracking,
  modifiedStatus: state.order.form.modifiedStatus,
  admin: state.auth.admin,
  isLoading: state.order.isLoading,
  user: state.auth.user,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch, ownProps) => ({

  loadOrder: () => {
    const { id } = ownProps.match.params;
    const { history } = ownProps;

    dispatch(getOneOrder(id, history));
  },
  loadStatus: () => {
    dispatch(getOrderStatus());
  },
  changeField: (value, name) => {
    dispatch(setOrderInputValue(value, name));
  },
  onSubmit: (status, tracking) => {
    dispatch(modifyOneOrder(status, tracking));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Order);
export default withRouter(connected);

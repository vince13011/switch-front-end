import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Account from 'src/components/Account';
import { logout } from 'src/actions/';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  user: state.auth,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Account);
export default withRouter(connected);

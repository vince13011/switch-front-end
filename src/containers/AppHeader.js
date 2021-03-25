import { connect } from 'react-redux';
import AppHeader from 'src/components/AppHeader';
import { toggleMenu, logout} from '../actions';

const mapStateToProps = (state) => ({
  categories: state.categories,
  logged: state.auth.logged,
  count: state.cart.count,
  name: state.auth.firstname,
  admin: state.auth.admin,

});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(toggleMenu());
  },
  logout: () => {
    dispatch(logout());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

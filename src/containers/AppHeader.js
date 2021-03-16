import { connect } from 'react-redux';
import AppHeader from 'src/components/AppHeader';
import { toggleMenu, logout} from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  categories: state.categories,
  logged: state.auth.logged,
  count: state.cart.count,
  name: state.auth.firstname,

});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(toggleMenu());
  },
  logout: () => {
    dispatch(logout());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

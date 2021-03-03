import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { setLoginInputValue, login , logout } from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setLoginInputValue(value, name));
  },
  handleLogin: () => {
   dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

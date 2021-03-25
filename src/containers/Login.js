import { connect } from 'react-redux';
import Login from 'src/components/Login';

const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  message: state.auth.message,

});

export default connect(mapStateToProps)(Login);

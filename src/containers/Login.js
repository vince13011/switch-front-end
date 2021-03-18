import { connect } from 'react-redux';
import Login from 'src/components/Login';


// branchement en lecture du state
const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  message: state.auth.message,

});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

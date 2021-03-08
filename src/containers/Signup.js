import { connect } from 'react-redux';
import Signup from 'src/components/Signup';
import { setSignupInputValue } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  email: state.signup.email,
  password: state.signup.password,
  confirm: state.signup.confirm,
  firstname: state.signup.firstname,
  lastname: state.signup.lastname,
  phoneNumber: state.signup.phone_number,
  number: state.signup.number,
  streetName: state.signup.street_name,
  zipcode: state.signup.zipcode,
  city: state.signup.city,
  country: state.signup.country,

});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setSignupInputValue(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

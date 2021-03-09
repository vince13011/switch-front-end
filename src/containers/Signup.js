import { connect } from 'react-redux';
import Signup from 'src/components/Signup';
import { setSignupInputValue, signup } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  email: state.signup.email,
  password: state.signup.password,
  confirm: state.signup.passwordConfirm,
  firstname: state.signup.firstname,
  lastname: state.signup.lastname,
  phoneNumber: state.signup.phone_number,
  number: state.signup.number,
  streetName: state.signup.street_name,
  zipcode: state.signup.zip_code,
  city: state.signup.city,
  country: state.signup.country,
  message: state.signup.message,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setSignupInputValue(value, name));
  },
  onSubmit: () => {
    dispatch(signup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

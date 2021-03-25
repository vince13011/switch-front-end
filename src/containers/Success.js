import { connect } from 'react-redux';
import Success from 'src/components/Success';

import { resetCart, setCheckoutSuccess } from '../actions';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({

  resetCheckoutSuccess: () => {
    dispatch(setCheckoutSuccess(false));
  },

  resetCheckedCart: () => {
    dispatch(resetCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);

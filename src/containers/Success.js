import { connect } from 'react-redux';
import Success from 'src/components/Success';

import { resetCart, setCheckoutSuccess } from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  user: state.auth.user,

});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

  resetCheckoutSuccess: () => {
    dispatch(setCheckoutSuccess(false));
  },

  resetCheckedCart: () => {
    dispatch(resetCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);

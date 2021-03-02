import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { toggleMenu } from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  categories: state.categories,
  showMenu: state.menu.showMenu,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

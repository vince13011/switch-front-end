import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { toggleMenu } from '../actions';


const mapStateToProps = (state) => ({
  categories: state.categories,
  showMenu: state.menu.showMenu,
});


const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import { connect } from 'react-redux';
import Fav from 'src/components/Fav';

const mapStateToProps = (state) => ({
  favorites: state.auth.favorites,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Fav);

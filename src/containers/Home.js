import { connect } from 'react-redux';
import Home from 'src/components/Home';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  recipes: state.recipes,
  title: state.home.title,
  text: state.home.text,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

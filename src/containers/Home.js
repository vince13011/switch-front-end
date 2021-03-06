import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  title: state.home.title,
  text: state.home.text,
});

export default connect(mapStateToProps)(Home);

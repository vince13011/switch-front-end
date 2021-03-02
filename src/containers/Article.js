import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from 'src/components/Article';
import { findRecipeBySlug } from '../selectors/recipes';

// branchement en lecture du state
const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    recipe: findRecipeBySlug(state.recipes, slug),
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
export default withRouter(connected);

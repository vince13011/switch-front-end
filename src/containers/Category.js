import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Category from 'src/components/Category';
import { findArticlesByCategory } from '../selectors/Category';
// branchement en lecture du state
const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps.match.params;
  const articles = findArticlesByCategory(state.articles, name);
  

  return {
    articles,
    size: state.article.size,
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});
const connected = connect(mapStateToProps, mapDispatchToProps)(Category);
export default withRouter(connected);

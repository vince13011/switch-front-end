import { connect } from 'react-redux';
import Category from 'src/components/Category';
import { findArticlesByCategory } from '../selectors/Category';
// branchement en lecture du state
const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps.match.params;
  const article = findArticlesByCategory(state.articles, name);
  console.log(article);

  return {
    article,
    size: state.article.size,
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Category);

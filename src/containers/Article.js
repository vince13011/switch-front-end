import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from 'src/components/Article';
import { findArticleById } from '../selectors/Article';

// branchement en lecture du state
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  console.log(findArticleById(state.articles, Number(id)))
  
  return {
    toto:'tata',
    article: findArticleById(state.articles, Number(id)),
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
export default withRouter(connected);

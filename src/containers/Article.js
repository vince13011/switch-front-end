import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from 'src/components/Article';
import { addToCart, setSizeValue } from '../actions';
import { findArticleById } from '../selectors/Article';

// branchement en lecture du state
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const article = findArticleById(state.articles, Number(id));
  console.log(article);

  return {
    toto: 'tata',
    article,
    size: state.article.size,
  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  toCart: (article, size) => {
    dispatch(addToCart(article, size));
  },
  setSize: (size) => {
    dispatch(setSizeValue(size));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
export default withRouter(connected);

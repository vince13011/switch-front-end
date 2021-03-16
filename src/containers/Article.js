import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from 'src/components/Article';
import {
  addToCart,
  getOneArticle,
  setSizeValue,
  modifyArticle,
  setModifyArticleSizeValue,
  setModifyArticleInputValue,
} from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  article: state.article.article,
  size: state.article.size,
  loading: state.article.loading,
  admin: state.auth.admin,
});

// branchement en écriture du state

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadArticle: () => {
    const { id } = ownProps.match.params;
    dispatch(getOneArticle(id));
  },
  toCart: (article, size) => {
    dispatch(addToCart(article, size));
  },
  setSize: (size) => {
    dispatch(setSizeValue(size));
  },

  changeSizeField: (value, name) => {
    dispatch(setModifyArticleSizeValue(value, name));
  },
  changeField: (value, name) => {
    dispatch(setModifyArticleInputValue(value, name));
  },
  onSubmit: () => {
    dispatch(modifyArticle());
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
export default withRouter(connected);

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
  deleteOneArticle,
  setArticleMessage,

} from '../actions';

const mapStateToProps = (state) => ({
  article: state.article.article,
  size: state.article.size,
  isLoading: state.article.isLoading,
  admin: state.auth.admin,
  message: state.article.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadArticle: () => {
    const { id } = ownProps.match.params;
    /* giving history in the action to be able to redirect in the middleware */
    const { history } = ownProps;
    dispatch(getOneArticle(id, history));
  },
  toCart: (article, size) => {
    dispatch(addToCart(article, size));
  },
  setSize: (size) => {
    dispatch(setSizeValue(size));
  },

  setMessage: (message) => {
    dispatch(setArticleMessage(message));
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
  onDelete: () => {
    dispatch(deleteOneArticle(ownProps.history));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
/* using withRouter to get OwnProps */
export default withRouter(connected);

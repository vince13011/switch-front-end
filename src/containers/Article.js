import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from 'src/components/Article';
import { addToCart, getOneArticle, setSizeValue,setModifyArticleSizeValue} from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  article: state.article.article,
  size: state.article.size,
  loading: state.article.loading,
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

  changeField:(value,name)=>{
    dispatch(setModifyArticleSizeValue(value,name))
  }
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Article);
export default withRouter(connected);

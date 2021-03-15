import { connect } from 'react-redux';
import CreateArticle from 'src/components/CreateArticle';
import {
  getAllCategories,
  getAllSizes,
  newSelectedSize,
  setCreateArticleInputValue,
  setSelectedSizeQty,
} from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.articles,
  categories: state.categories,
  ...state.createArticle,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  loadSizes: () => {
    dispatch(getAllSizes());
  },
  loadCategories: () => {
    dispatch(getAllCategories());
  },
  selectSize: (size) => {
    dispatch(newSelectedSize(size));
  },
  setSizeQty: (value, name) => {
    dispatch(setSelectedSizeQty(value, name));
  },
  changeField: (value, name) => {
    dispatch(setCreateArticleInputValue(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

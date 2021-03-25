import { connect } from 'react-redux';
import CreateArticle from 'src/components/CreateArticle';
import {
  getAllCategories,
  getAllSizes,
  newSelectedSize,
  setCreateArticleInputValue,
  setSelectedSizeQty,
  addSelectedCategory,
  removeSelectedCategory,
  setSelectedImage,
  createOneArticle,
} from '../actions';

const mapStateToProps = (state) => ({
  articles: state.articles,
  categories: state.categories,
  ...state.createArticle,
});

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
  // adding or removing the category for the new article according if we check or uncheck the box

  onChangeCheckbox: (value, name) => (value
    ? dispatch(addSelectedCategory(name))
    : dispatch(removeSelectedCategory(name))),
  selectImage: (url) => {
    dispatch(setSelectedImage(url));
  },
  onSubmit: () => {
    dispatch(createOneArticle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

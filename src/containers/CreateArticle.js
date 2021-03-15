import { connect } from 'react-redux';
import CreateArticle from 'src/components/CreateArticle';
import {
   getAllCategories, 
  getAllSizes,
   newSelectedSize,
   setSelectedSizeQty
   } from '../actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.articles,
  categories: state.categories,
  sizes: state.createArticle.sizes,
  selectedSizes: state.createArticle.selectedSizes,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  loadSizes: () => {
    dispatch(getAllSizes());
  },
  loadCategories: () => {
    dispatch(getAllCategories());
  },
  selectSize:(size)=>{
    dispatch(newSelectedSize(size))
  },
  setSizeQty:(value,name)=>{
    dispatch(setSelectedSizeQty(name,value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

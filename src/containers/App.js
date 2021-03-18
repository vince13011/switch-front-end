import { connect } from 'react-redux';
import App from 'src/components/App';
import { getAllArticles, getAllCategories, checkedCart } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.articles,
  loading: state.app.loading,
  logged: state.auth.logged,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  removeCartStatus: () => {
    dispatch(checkedCart(false));
  },

  loadArticles: () => {
    dispatch(getAllArticles());
  },
  loadCategories: () => {
    dispatch(getAllCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

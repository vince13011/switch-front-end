import { connect } from 'react-redux';
import App from 'src/components/App';
import { getAllArticles, getAllCategories, checkedCart } from 'src/actions';

const mapStateToProps = (state) => ({
  articles: state.articles,
  loading: state.app.loading,
  logged: state.auth.logged,
});

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

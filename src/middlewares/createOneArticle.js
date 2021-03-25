import { CREATE_ONE_ARTICLE, setAdminLoading, getAllArticles } from 'src/actions';
import axios from 'axios';

const createOneArticle = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ONE_ARTICLE: {
      store.dispatch(setAdminLoading(true));
      // formating the new article in the good shape for the API
      const article = { ...store.getState().createArticle };
      delete article.sizes;
      article.categories = article.selectedCategories.map((category) => ({ title: category }));
      article.sizes = article.selectedSizes;
      delete article.selectedSizes;
      delete article.selectedCategories;

      // geting the token from the store, admin token needed
      const { token } = store.getState().auth;
      axios.post('https://switch-ecommerce.herokuapp.com/v1/article/', {

        ...article,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(

          (response) => {
            /* after article is created i call the action getAllArticle()
            so that will run the useEffect in admin page,
            and render the page including the new article just created */
            store.dispatch(getAllArticles());
            store.dispatch(setAdminLoading(false));
          },
        ).catch((err) => {
          console.log(err);
          store.dispatch(setAdminLoading(false));
        })
        .finally();
    }
      break;
    default:
      next(action);
  }
};

export default createOneArticle;

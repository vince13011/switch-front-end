import {
  GET_ONE_ARTICLE, saveOneArticle, articleLoading, MODIFY_ARTICLE,
} from 'src/actions';
import axios from 'axios';

const getOneArticles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE:
      store.dispatch(articleLoading(true));
      axios.get(`https://switch-e-commerce.herokuapp.com/v1/article/${action.id}`)
        .then(
          (response) => {
            const article = response.data;
            store.dispatch(saveOneArticle(article));
            console.log(store.getState().article);
            store.dispatch(articleLoading(false));
          },
        ).catch((err) => console.log(err))
        .finally();
      break;
    case MODIFY_ARTICLE:
      const { article } = store.getState().article;
      const reqid = article.id
      article.sizes = article.sizes.map((size) => ({
        size_name: size.size_name,
        stock: size.article_has_size.stock,
      }));
      article.categories=article.categories.map(category => ({title:category.title}))
      delete article.created_at;
      delete article.updated_at;
      delete article.id;
      
      console.log('ma requete', article);
       axios.put(`https://switch-e-commerce.herokuapp.com/v1/article/${reqid}`,
        article)
        .then(response => (console.log(response.data))) 
      break;
    default:
      next(action);
  }
};

export default getOneArticles;

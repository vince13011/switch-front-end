import { CHECKING_STOCK_FROM_API, setCartMessage, checkedCart } from 'src/actions';

import axios from 'axios';

const checkingCart = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECKING_STOCK_FROM_API:
      if (!store.getState().auth.logged) {
        return store.dispatch(setCartMessage('connecte toi !'));
      }
      store.dispatch(setCartMessage(''));
      const promises = action.articles.map((article) => axios.get(`https://switch-e-commerce.herokuapp.com/v1/article/${article.id}`));
      Promise.all(promises)
        .then((responses) => {
          responses.forEach((response, index) => {
            // là tu fais ton traitement
            const article = action.articles[index];
            console.log(action.articles[index].size);
            const realStockArticle = response.data;

            const selectedSize = realStockArticle.sizes.find((e) => e.size_name === article.size);
            console.log(selectedSize.article_has_size.stock);
            console.log(article.qty);
            if (selectedSize.article_has_size.stock <= article.qty) {
              return store.dispatch(setCartMessage(`stock insufisant  pour l'article ${article.name}`));
            }
          });
          if (store.getState().cart.message === '') {
            store.dispatch(checkedCart(true));
          }
        });
      break;
    default:
      next(action);
  }
};
export default checkingCart;

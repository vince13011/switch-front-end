import { CHECKING_STOCK_FROM_API, setCartMessage } from 'src/actions';
import axios from 'axios';

const checkingCart = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECKING_STOCK_FROM_API:
      if (!store.getState().auth.logged) {
        return store.dispatch(setCartMessage('connecte toi !'));
      }

      action.articles.forEach((article) => {
        axios.get(`https://switch-e-commerce.herokuapp.com/v1/article/${article.id}`)
          .then(
            (response) => {
              const realStockArticle = response.data[0];
              console.log(article.size);
              const selectedSize = realStockArticle.sizes.find((e) => e.size_name === article.size);
              if (selectedSize.stock <= article.qty) {
                return store.dispatch(setCartMessage(`stock insufisant  pour l'article ${article.name}`));
              }
              return store.dispatch(setCartMessage('OK'));
            },
          );
      });

      // after the fetch
      console.log('coucou');
      break;
    default:
      next(action);
  }
};
export default checkingCart;

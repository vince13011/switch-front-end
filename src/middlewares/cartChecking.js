import { CHECKING_STOCK_FROM_API, setCartMessage, checkedCart } from 'src/actions';

import axios from 'axios';

const checkingCart = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECKING_STOCK_FROM_API: {
      // checking if logged

      if (!store.getState().auth.logged) {
        return store.dispatch(setCartMessage('Vous devez être connecté pour passer une commande.'));
      }

      // checking that there is something in the cart;

      if (store.getState().cart.count === 0) {
        return store.dispatch(setCartMessage('Votre panier est vide'));
      }
      // if 2 above conditions are ok => clear Cart message

      store.dispatch(setCartMessage(''));

      // for each article in the cart, I request api to get the current stock for each size
      const promises = action.articles.map((article) => axios.get(`https://switch-ecommerce.herokuapp.com/v1/article/${article.id}`));
      Promise.all(promises)
        .then((responses) => {
          responses.forEach((response, index) => {
            /* when all the promises are done:
            I compare each article stock ,
            with article qty i want to order for each size
            (using the index to compare the good article in cart with the good article in the stock)
          */
            const article = action.articles[index];

            const realStockArticle = response.data;

            const selectedSize = realStockArticle.sizes.find((e) => e.size_name === article.size);

            // if there is not enough qty in the stock , I dispatch a  cart message and return
            if (selectedSize.article_has_size.stock <= article.qty) {
              return store.dispatch(setCartMessage(`stock insufisant  pour l'article ${article.name} en taille ${article.size}`));
            }
          });
          /* after checking, if don't have cart message, i turn the cart checked =True
          whitch will show the checkout page instead of cart page */
          if (store.getState().cart.message === '') {
            store.dispatch(checkedCart(true));
          }
        }); }
      break;
    default:
      next(action);
  }
};
export default checkingCart;

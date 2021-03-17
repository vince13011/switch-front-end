import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './style.scss';
import CreateArticle from 'src/containers/CreateArticle';
import Loading from '../App/Loading';

const Admin = ({
  loadOrders,
  loadArticles,
  orders,
  articles,
  isLoading,

}) => {
  const [showAllorders, setShowAllorders] = useState(false);

  useEffect(() => {
    loadOrders();
    loadArticles();
  }, []);
  if (isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <>

      <header className="admin__header">
        <h1 className="admin__title"> Panneau d'Administration </h1>
        <div className="">
          <NavLink className="admin__header__link" to="/">Retour à l'accueil du site </NavLink>
          <a className="admin__header__link" href="https://dashboard.stripe.com/test/dashboard" target="_blank" rel="noopener noreferrer">Mes Paiments</a>
        </div>
      </header>
      <main className="admin__mainContainer">

        <div className="admin__first__row__wrapper">
          <div className="admin__articles">
            <div className="admin__subtitle">Mes articles en vente</div>

            <div className="admin__articles__modify">
              {articles
            && articles.map(
              (article) => (
                <Link to={`/article/${article.id}`}>
                  <div className="admin__articles__item">
                    <div className="admin__articles__item__image">
                      <img src={article.image} alt="" />
                    </div>
                    <div className="admin__articles__item__description">
                      {article.name} ref :{article.reference}

                      {article.sizes.map(
                        (size) => (
                          <div className="admin__articles__item__stock">
                            taille: {size.size_name} stock: {size.article_has_size.stock}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </Link>
              ),
            )}
            </div>
          </div>
          <div className="admin__orders__container ">
            <div className="admin__orders">
              <div className="admin__subtitle">
                {
          showAllorders ? 'Toutes les commandes' : 'Commandes à traiter'
        }

                <button
                  className="admin__orders__button"
                  type="button"
                  onClick={() => {
                    setShowAllorders(!showAllorders);
                  }}
                > {showAllorders
                  ? 'voir seulement les commandes a traiter '
                  : 'voir toutes les commandes ' }
                </button>
              </div>

              {/* if local state showAll is false, will show order where status is pending
           */}
              {!showAllorders
                ? (orders && orders.map(
                  (order) => {
                    if (order.status_name === 'pending') {
                      return (
                        <Link to={`/order/${order.id}`}>
                          <div className="admin__orders__item admin__orders__item--pending"> {order.order_number} {order.status_name} </div>
                        </Link>
                      );
                    }
                  },
                ))
              /* if local state showAll is true, will show all the loaded orders
           */
                : (
                  orders && orders.map(
                    (order) => (
                      <Link to={`/order/${order.id}`}>
                        <div className={`admin__orders__item admin__orders__item--${order.status_name}`}> {order.order_number} {order.status_name} </div>
                      </Link>
                    ),
                  )
                )}

            </div>
          </div>
        </div>

        <div className="admin__articles__create">
          <CreateArticle />
        </div>

      </main>
    </>
  );
};

export default Admin;

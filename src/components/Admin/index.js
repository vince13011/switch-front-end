import React, { useEffect, useState } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import CreateArticle from 'src/containers/CreateArticle';
import Loading from '../App/Loading';

const Admin = ({
  loadOrders,
  loadArticles,
  orders,
  articles,
  isLoading,
  admin,

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
  if (!admin) {
    return <Redirect to="/" />;
  }
  return (
    <>

      <header className="admin__header">
        <h1 className="admin__title">Administrateur</h1>
        <div className="">
          <NavLink className="admin__header__link" to="/">SWITCH</NavLink>
          <a
            className="admin__header__link"
            href="https://dashboard.stripe.com/test/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            STRIPE
          </a>
        </div>
      </header>
      <main className="admin__mainContainer">
        <div className="admin__first__row__wrapper">
          <div className="admin__articles">
            <div className="admin__subtitle admin__subtitle-title">
              Mes articles en vente
            </div>

            <div className="admin__articles__modify">
              {articles
                && articles.map(
                  (article) => (
                    <Link to={`/article/${article.id}`}>
                      <div className="admin__articles__item">
                        <div className="admin__articles__item__image">
                          <img className="admin__articles__item__image-img" src={article.image} alt={article.name} />
                        </div>
                        <div className="admin__articles__item__description">
                          <p className="admin__articles__item__description-name">{article.name}</p>
                          <p className="admin__articles__item__description-reference">Réf: {article.reference}</p>

                          <table className="admin__articles__item__description-stock">
                            <thead>
                              <tr>
                                <td className="admin__articles__item__description-stock-title">Taille</td>
                                <td className="admin__articles__item__description-stock-title">Stock</td>
                              </tr>
                            </thead>
                            <tbody>
                              {/* className="admin__articles__item__description-stock" */}
                              {article.sizes
                                && article.sizes.map(
                                  (size) => (
                                    <tr>
                                      <td className="admin__articles__item__description-stock-infos">{size.size_name}</td>
                                      <td className="admin__articles__item__description-stock-infos">{size.article_has_size.stock}</td>
                                    </tr>
                                  ),
                                )}
                            </tbody>
                          </table>

                          <p className="admin__articles__item__description-price">{article.pre_tax_price} € ht</p>
                        </div>
                      </div>
                    </Link>
                  ),
                )}
            </div>
          </div>
          <div className="admin__first__row__wrapper-orders-articles">
            <div className="admin__orders__container">
              <div className="admin__orders">
                <div className="admin__subtitle">
                  Les Commandes
                  <div className="admin__orders__buttons">
                    <button
                      className={`admin__orders__button admin__orders__button-${showAllorders}`}
                      type="button"
                      onClick={() => {
                        setShowAllorders(true);
                      }}
                    >
                      Toutes
                    </button>
                    <button
                      className={`admin__orders__button admin__orders__button-${!showAllorders}`}
                      type="button"
                      onClick={() => {
                        setShowAllorders(false);
                      }}
                    >
                      A Traiter
                    </button>
                  </div>
                </div>

                {!showAllorders
                  ? (orders && orders.map(
                    (order) => {
                      if (order.status_name === 'en attente') {
                        return (
                          <Link to={`/order/${order.id}`}>
                            <div className="admin__orders__item status-pending">
                              <p className="status-order_status">Statut : {order.status_name}</p>
                              <p className="status-order_number">N° : {order.order_number}</p>
                              <p className="status-order_price">Total : {order.total_price}€</p>
                            </div>
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
                          <div className={`admin__orders__item status-${order.status_name}`}>
                            <p className="status-order_status">Statut : {order.status_name}</p>
                            <p className="status-order_number">N° : {order.order_number}</p>
                            <p className="status-order_price">Total : {order.total_price}€</p>
                          </div>
                        </Link>
                      ),
                    )
                  )}

              </div>
            </div>
            <div className="admin__articles__create">
              <CreateArticle />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Admin.propTypes = {
  loadOrders: PropTypes.func.isRequired,
  loadArticles: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
};

export default Admin;

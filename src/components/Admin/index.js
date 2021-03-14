import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Admin = ({
  loadOrders,
  loadArticles,
  orders,
  articles,

}) => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    loadOrders();
    loadArticles();
  }, []);

  return (

    <div className="admin__mainContainer">
      <h1 className="admin__title"> Panneau d'Administration </h1>

      <div className="admin__articles">
        <div className="admin__subtitle">Mes articles en vente</div>
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

      <div className="admin__orders__container ">
        <div className="admin__orders">
          <div className="admin__subtitle">
            {
          showAll ? 'Toutes les commandes' : 'Commandes à traiter'
        }

            <button
              className="admin__orders__button"
              type="button"
              onClick={() => {
                setShowAll(!showAll);
              }}
            > {showAll
              ? 'voir seulement les commandes a traiter '
              : 'voir toutes les commandes ' }
            </button>
          </div>

          {/* if local state showAll is false, will show order where status is pending
           */}
          {!showAll
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

  );
};

export default Admin;

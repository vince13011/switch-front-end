/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Page from 'src/components/Page';
import Loading from 'src/components/App/Loading';

import { Redirect } from 'react-router-dom';

const Order = ({
  order,
  loadOrder,
  address,
  loadStatus,
  status,
  changeField,
  modifiedTracking,
  modifiedStatus,
  onSubmit,
  admin,
  isLoading,
  user,
}) => {
  useEffect(() => {
    loadOrder();
    loadStatus();
  }, []);
  const handleChangeField = (event) => {
    changeField(event.target.value, event.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(modifiedStatus,
      modifiedTracking);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return (<Redirect to="/" />);
  }

  return (
    <Page>
      {order
        && (
          <div className="order__maincontainer">
            <div className="order__container">
              <h1>Récapitulatif</h1>

              <div className="order__articles">
                <h2 className="order__subtitle">Commande N° {order.order_number}</h2>

                {order.articles && order.articles.map((article) => (
                  <div div className="order__article">
                    <div className="order__article__image"> <img src={article.article_image} alt="" /></div>
                    <div className="order__article__description">
                      <div className="order__article__item order__article__item--size">Taille: {article.sizes.size}</div>
                      <div className="order__article__item order__article__item--qty">
                        Quantité: {article.sizes.quantity}
                        <div />
                      </div>
                      <div className="order__article__item order__article__item--price">Prix unitaire HT {article.unit_net_price} €</div>
                    </div>
                  </div>
                ))}

              </div>
              <div className="order__footer">

                <div className="order__footer__total">Total TTC: {order.total_price} €</div>
                {address && (
                  <div className="order__footer__address">
                    <h2 className="order__footer__subtitle">Adresse de livraison</h2>

                    <p className="order__footer__address__item">{address.number} {address.street_name}</p>
                    <p className="order__footer__address__item">{address.zip_code} {address.city}</p>
                  </div>
                )}
                <div className="order__footer__status__current">Statut: {order.status_name}</div>
                {order.tracking_number && (
                  <div className="order__footer__status">N° de suivi : {order.tracking_number}</div>
                )}
              </div>
              {/* modifying the order , only for admin */}
              {admin && (
                <form action="" className="order__form">
                  {/* modifying the status */}
                  <div className="order__select--container">
                    <label className="order__select--container-select" htmlFor="status_select" />
                    <select
                      className="order__select--container-select-status"
                      id="status_select"
                      name="modifiedStatus"
                      onChange={handleChangeField}
                    >
                      <option value="">Choisir</option>
                      {status
                        && status.map(
                          (stat) => (
                            <option value={stat.status_name}>
                              {stat.status_name}
                            </option>
                          ),
                        )}
                    </select>

                  </div>
                  <div className="order__select--container__tracking-number">
                    {/* modifying the tracking number  */}
                    <input
                      className="order__select--container-input"
                      type="text"
                      name="modifiedTracking"
                      placeholder="Numéro de suivi colis"
                      onChange={handleChangeField}
                      value={modifiedTracking}
                    />
                    <button
                      className="order__select--container-btn"
                      type="submit"
                      onClick={handleSubmit}
                    >Confirmer
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        )}
    </Page>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  loadOrder: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  loadStatus: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired,
  changeField: PropTypes.func.isRequired,
  modifiedTracking: PropTypes.func.isRequired,
  modifiedStatus: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.bool.isRequired,
};

export default Order;

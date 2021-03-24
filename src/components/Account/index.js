import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import { Link, Redirect } from 'react-router-dom';
import './style.scss';

const Account = ({
  user,
  logout,
  address,
  logged,
  orders,
  loadOrders,
}) => {
  if (!logged) {
    return <Redirect to="/" />;
  }
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <Page>
      <div className="account__maincontainer">
        <div className="account__title">
          <h1 className="account__title-name">Bienvenue : {user.firstname}</h1>
        </div>
        <div className="account__info">
          <h2 className="account__subtitle">Mes infos</h2>
          <p className="account__item account__item-name">{user.firstname} {user.lastname}</p>
          {/* <p className="account__item">Nom: {user.lastname}</p> */}
          <p className="account__item account__item-tel">Tél : {user.phone_number}</p>
        </div>
        <div className="account__address">
          <h2 className="account__subtitle">Mon Adresse</h2>
          <p className="account__item">{address.number} {address.street_name}</p>
          <p className="account__item">{address.zip_code} {address.city}</p>
        </div>
        <div className="account__orders">
          <h2 className="account__subtitle">Mes Commandes</h2>
          {orders && orders.map(
            (order) => (
              <div className="account_item-orders">
                <Link to={`/order/${order.id}`}>
                  <p className="account__item-order-number">Numéro de Commande : {order.order_number}</p>
                  <p className="account__item-order-status">Status : <span className="account__item-order-status-type">{order.status_name}</span></p>
                  <p className="account__item-total-amount">Montant Total : {order.total_price}€</p>
                </Link>
              </div>
            ),
          )}

        </div>
        <button
          className="account__button"
          onClick={() => {
            logout();
          }}
          type="button"
        >Se déconnecter
        </button>
      </div>
    </Page>
  );
};

Account.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired,
  orders: PropTypes.object.isRequired,
  loadOrders: PropTypes.func.isRequired,
};

export default Account;

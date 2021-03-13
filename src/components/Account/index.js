import React, { useEffect } from 'react';
import Page from 'src/components/Page';
import { Link,Redirect } from 'react-router-dom';
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
  },[]);

  return (
    <Page>
      <div className="account__maincontainer">
        <div className="account__title">
          <h1>Bienvenue: {user.firstname}</h1>
        </div>
        <div className="account__info">
          <h2 className="account__subtitle"> Mes infos </h2>
          <p className="account__item">Prénom: {user.firstname}</p>
          <p className="account__item">Nom: {user.lastname}</p>
          <p className="account__item">Numero de téléphone: {user.phone_number}</p>
        </div>
        <div className="account__address">
          <h2 className="account__subtitle"> Mon Adresse</h2>
          <p className="account__item">{address.number} {address.street_name}</p>
          <p className="account__item">{address.zip_code} {address.city}</p>
        </div>
        <div className="account__orders">
          <h2 className="account__subtitle"> Mes Commandes </h2>
          { orders && orders.map(
             (order) => (
               <Link to = {`/order/${order.id}`}>
                 <p className="account__item">{order.order_number} {order.total_price}€</p>
               </Link>
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

export default Account;

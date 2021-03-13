import React, { useEffect,useState} from 'react';
import './style.scss';

const Admin = ({
  loadOrders,
  orders,
}) => {
  
  useEffect(() => {
    loadOrders();
  }, []);

  return (

    <div className="admin__mainContainer">
      <div className="admin__articlesButtons">
        <div className="admin__articlesButtons__createArticleButton"> bouton pour creer un nouvele article  </div>
        <div className="admin__articlesButtons__modifyArticleButton"> bouton pour modifier </div>
      </div>
      <div className="admin__stats">
        <div className="admin__stats__lastOrders">graphique dernieres commandes</div>
        <div className="admin__stats__lastInscription">graphique derniers inscrits </div>
      </div>
      <div className="admin__orders">
        <div className="admin__orders__totreat">commandes a traiter

          {orders && orders.map((order) => (
            <div> {order.order_number} </div>
          ))}
        </div>
        <div className="admin__orders__viewAll">voir toute les commandes</div>
      </div>

    </div>

  );
};

export default Admin;

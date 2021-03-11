import React from 'react';
import './style.scss';

const Order = () => (
  <>
    <h1>Order</h1>
    <div className="order__container">
      <div className="order__address">
      <h2 className="order__address">Mon adresse de livraison </h2>
        <p>
          12 rue de la tout eiffel
        </p>
        <p>
          59390 lys lez lannoy
        </p>
      </div>
      <div className="order__articles">
      <h2 className="order__address">Mes Articles </h2>
        <p>article 1</p>
        <p>article 2</p>
        <p>article 3</p>
        <p>article 4</p>

      </div>
    <div className="order__footer">
      <p>total 200€</p>
    </div>

    </div>
  </>
);

export default Order;

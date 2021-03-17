import React, { useEffect } from 'react';
import './style.scss';
import Page from '/src/components/Page';
import Loading from 'src/components/App/Loading';

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
}) => {
  useEffect(() => {
    loadOrder();
    loadStatus();// only for the select button
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
 

  return (
    <Page>
      {console.log('render order')}
      {order
    && (
    <div className="order__maincontainer">
      <div className="order__container">
        <h1>Récapitulatif</h1>

        <div className="order__articles">
          <h2 className="order__subtitle">commande N° {order.order_number} </h2>

          {order.articles && order.articles.map((article) => (
            <div className="order__article">
              <div className="order__article__image"> <img src={article.article_image} alt="" /></div>
              <div className="order__article__description">
                <div className="order__article__item order__article__item--title">{article.article_name}</div>
                <div className="order__article__item order__article__item--size">Taille: {article.sizes.size}</div>
                <div className="order__article__item order__article__item--qty">
                  quantité: {article.sizes.quantity}
                  <div />
                </div>
                <div className="order__article__item order__article__item--price">{article.unit_net_price} € </div>
              </div>
            </div>
          ))}

        </div>
        <div className="order__footer">

          {address && (
          <div className="order__footer__address">
            <h2 className="order__footer__subtitle">Adresse de livraison </h2>
            <p className="order__footer__address__item" />
            <p className="order__footer__address__item">{address.number} {address.street_name}</p>
            <p className="order__footer__address__item">{address.zip_code} {address.city}</p>
          </div>
          )}
          <div className="order__footer__total">
            Total: {order.total_price} €
          </div>

          <div className="order__footer__status">
            <div className="order__footer__status__current">
              Statut: {order.status_name}
            </div>
          </div>
          <div className="order__footer__status">
            N° de suivi : {order.tracking_number}
          </div>
        </div>

        {admin && (
        <form
          action=""
          className="order__form"
        >

          <div className="order__select--container">

            <label htmlFor="status_select">Selectionner un statut</label>
            <select
              id="status_select"
              name="modifiedStatus"
              onChange={handleChangeField}
            >
              <option value="">-Selectionner un statut-</option>
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
          <input
            type="text"
            name="modifiedTracking"
            onChange={handleChangeField}
            value={modifiedTracking}
          />
          <button
            type="submit"
            onClick={handleSubmit}
          >Mettre a jour la commande
          </button>
        </form>
        )}
      </div>
    </div>
    )}
    </Page>
  );
};
export default Order;

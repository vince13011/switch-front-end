import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/App/Loading';

import Field from 'src/components/Field';
import { app } from '../../base';
import './style.scss';

const CreateArticle = ({
  loadSizes,
  loadCategories,
  sizes,
  categories,
  selectSize,
  selectedSizes,
  setSizeQty,
  reference,
  name,
  color,
  pre_tax_price,
  vat_rate,
  discount,
  description,
  changeField,
  onChangeCheckbox,
  selectImage,
  image,
  onSubmit,
  className,

}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSizes();
    loadCategories();
  }, []);

  const onFileChange = async (e) => {
    try {
      setLoading(true);
      const file = e.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const url = await fileRef.getDownloadURL();
      selectImage(url);
    }
    catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleSizeSelect = (e) => {
    selectSize(e.target.value);
  };
  const handleChangeCheckBox = (e) => {
    onChangeCheckbox(e.target.checked, e.target.name);
  };

  return (
    <div className={`createArticle__maincontainer createArticle__maincontainer--${className}`}>

      <h2 className="admin__subtitle createArticle__title">Créer un nouvel Article </h2>
      <form
        action=""
        className="createArticle__form"
      >
        <Field
          className="createArticle__form__reference"
          name="reference"
          placeholder="réference de l'article "
          onChange={changeField}
          value={reference}
        />

        <Field
          name="name"
          type="text"
          placeholder="nom de l'article "
          onChange={changeField}
          value={name}
        />
        <Field
          name="color"
          type="text"
          placeholder="Couleur "
          onChange={changeField}
          value={color}
        />
        <label className="field__label" htmlFor="desc">description</label>
        <textarea
          id="desc"
          name="description"
          className="field"
          onChange={(e) => (changeField(e.target.value, 'description'))}
          value={description}
        />
        <div className="createArticle__price">
          <Field
            className="createArticle__price-values"
            name="pre_tax_price"
            type="text"
            placeholder="prix HT"
            onChange={changeField}
            value={pre_tax_price}
          />

          <Field
            className="createArticle__price-values"
            name="vat_rate"
            type="text"
            placeholder="TVA"
            onChange={changeField}
            value={vat_rate}
          />

          <Field
            className="createArticle__price-values"
            name="discount"
            type="text"
            placeholder="réduction"
            onChange={changeField}
            value={discount}
          />
        </div>

        <select
          className="createArticle__form__select"
          name="size"
          id=""
          onChange={handleSizeSelect}
        >
          <option value="" className="createArticle__form__select__option">Selection des tailles et stocks</option>
          {sizes && sizes.map(
            (size) => (
              <option
                className="createArticle__form__select__option"
                value={size.size_name}
              >{size.size_name}
              </option>
            ),
          )}
        </select>
        {selectedSizes
          && selectedSizes.map(
            (size) => (
              <Field
                type="text"
                name={size.size_name}
                placeholder={`Taille "${size.size_name}", Stock :`}
                onChange={setSizeQty}
                value={size.stock}
              />
            ),
          )}
        <p className="createArticle__checkbox__title">Catégories</p>
        {categories
          && categories.map((categorie) => (
            <div className="createArticle__checkbox">
              <label htmlFor={`checkbox--${categorie.title}`}>{categorie.title}</label>
              <input
                type="checkbox"
                id={`checkbox--${categorie.title}`}
                name={categorie.title}
                onChange={handleChangeCheckBox}
              />
            </div>
          ))}

        <input
          className="createArticle__picture"
          type="file"
          onChange={onFileChange}
        />
        {loading
          && <div className="uploadLoader">Chargement...</div>}
        {image
          && (<div className="createArticle__preview"><img src={image} alt="" /></div>)}

        <button
          className="createArticle__form__button"
          type="submit"
          onClick={handleSubmit}
        >Créer l'article
        </button>
      </form>
    </div>

  );
};

CreateArticle.propTypes = {
  loadSizes: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  selectSize: PropTypes.func.isRequired,
  selectedSizes: PropTypes.object.isRequired,
  setSizeQty: PropTypes.func.isRequired,
  reference: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  pre_tax_price: PropTypes.number.isRequired,
  vat_rate: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  selectImage: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default CreateArticle;

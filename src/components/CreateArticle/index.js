import React, { useEffect, useState } from 'react';
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
    onSubmit()
  };

  const handleSizeSelect = (e) => {
    selectSize(e.target.value);
  };
  const handleChangeCheckBox = (e) => {
    onChangeCheckbox(e.target.checked, e.target.name);
  };

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div className="createArticle__maincontainer">

      <h2>Creer un nouvel Article </h2>
      <form
        action=""
        className="createArticle__form"
      >
        <Field
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
        <label htmlFor="desc">description</label>
        <textarea
          id="desc"
          name="description"
          className="field"
          onChange={(e) => (changeField(e.target.value, 'description'))}
          value={description}
        />
        <div className="createArticle__price">
          <Field
            name="pre_tax_price"
            type="text"
            placeholder="prix HT"
            onChange={changeField}
            value={pre_tax_price}
          />

          <Field
            name="vat_rate"
            type="text"
            placeholder="TVA"
            onChange={changeField}
            value={vat_rate}
          />

          <Field
            name="discount"
            type="text"
            placeholder="réduction"
            onChange={changeField}
            value={discount}
          />
        </div>

        <select
          name="size"
          id=""
          onChange={handleSizeSelect}
        >
          <option value=""> -Selectioner une taille-</option>
          {sizes && sizes.map(
            (size) => (
              <option
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
              placeholder={`Taille ${size.size_name},Quantité :`}
              onChange={setSizeQty}
              value={size.stock}
            />
          ),
        )}
        {categories
        && categories.map((categorie) => (
          <div className="createArticle__checkbox">
            <label htmlFor={`checkbox--${categorie.title}`}> {categorie.title} </label>
            <input
              type="checkbox"
              id={`checkbox--${categorie.title}`}
              name={categorie.title}
              onChange={handleChangeCheckBox}
            />
          </div>
        ))}
        <input
          type="file"
          onChange={onFileChange}
        />

        {image
        && (<div className="createArticle__preview"><img src={image} alt="" /></div>)}

        <button
          type="submit"
          onClick={handleSubmit}
        >Creer l'article
        </button>
      </form>
    </div>

  );
};

export default CreateArticle;

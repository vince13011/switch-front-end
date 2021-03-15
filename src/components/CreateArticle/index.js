import React, { useEffect } from 'react';

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
}) => {
  useEffect(() => {
    loadSizes();
    loadCategories();
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    await console.log(fileRef.getDownloadURL());
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const onSizeSelect = (e) => {
    selectSize(e.target.value);
  };

  const onSizeInputChange = (e)=> {
    /*setSizeQty(name,
      e.target.value);*/
      console.log(name)
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
        />

        <Field
          name="name"
          type="text"
          placeholder="nom de l'article "
        />
        <label htmlFor="desc">description</label>
        <textarea id="desc" name="description" className="field" />
        <div className="createArticle__price">
          <Field
            name="pre_tax_price"
            type="text"
            placeholder="prix HT"
          />

          <Field
            name="vat_rate"
            type="text"
            placeholder="TVA"
          />

          <Field
            name="discount"
            type="text"
            placeholder="réduction"
          />
        </div>

        <select
          name="size"
          id=""
          onChange={onSizeSelect}
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
              onChange={(e) => console.log(e.target.checked)}
            />
          </div>
        ))}
        <input
          type="file"
          onChange={onFileChange}
        />

        <button
          type="submit"
          onClick={onClick}
        >Creer l'article
        </button>
      </form>
    </div>

  );
};

export default CreateArticle;

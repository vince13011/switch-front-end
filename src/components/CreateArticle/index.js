import React from 'react';
import Field from 'src/components/Field';
import { app } from '../../base';
import './style.scss';

const CreateArticle = () => {
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
        <textarea id="desc" name="description" />
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
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
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

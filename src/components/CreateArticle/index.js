import React from 'react';
import Field from 'src/components/Field';
import Page from 'src/components/Page';
import './style.scss';

const CreateArticle = () => (

  <Page>
    <div>
      <h1 className="pagetitle">Créer un Article </h1>
      <form className="createArticle__form">
        <Field
          name="title"
          placeholder="Titre"
          type="text"
        />
        <Field
          name="image"
          placeholder="image"
          type="file"
        />
        <Field
          name="description"
          placeholder="Description"
          type="text"
        />
        <Field
          name="price"
          placeholder="Prix"
          type="number"
        />
        <Field
          name="color"
          placeholder="Couleur"
          type="text"
        />
        <Field
          name="size"
          placeholder="Taille"
          type="text"
        />
        <button
          type="submit"
          className="createArticle__button"
        >
          Valider
        </button>
      </form>
    </div>
  </Page>
);
export default CreateArticle;

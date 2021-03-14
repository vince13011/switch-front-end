import React from 'react';
import { app } from '../../base';
import './style.scss';

const CreateArticle = () => {
  const onFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('uploaded', file.name);
    });
  };

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Creer un nouvel Article </h2>
      <form action="">
        <input
          type="text"
          placeholder="titre"
        />
        <input
          type="file"
          onChange={onFileChange}

        />
        <button
          type="submit"
          onClick={onClick}
        >Upload de l'image
        </button>
      </form>
    </>
  );
};

export default CreateArticle;

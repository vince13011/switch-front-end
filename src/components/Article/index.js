/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';


// Style
import './style.scss';

// == Composant
function Recipe({ recipe }) {
  if (!recipe) {
    return <Redirect to="/error" />;
  }
  return (
    <Page>

    </Page>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }),
};

Recipe.defaultProps = {
  recipe: null,
};

// == Export
export default Recipe;

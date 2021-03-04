import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import Content from 'src/components/Content';

const Fav = ({ favorites }) => (
  <Page>
    <Content
      title="Mes recettes préférées"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={favorites}
    />
  </Page>
);

Fav.propTypes = {
  favorites: PropTypes.array.isRequired,
};

export default Fav;

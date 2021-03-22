import React from 'react';

import Page from 'src/components/Page';

import Content from 'src/components/Content';
import { Link } from 'react-router-dom';

const Error = () => (
  <Page>
    <Content
      title="404"
      text="Nous sommes désolé, Une erreur s'est produite."
    />
    
    <Link to="/">Retour à l'accueil</Link>
  </Page>
);

export default Error;

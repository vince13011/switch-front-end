import React from 'react';

import { Link } from 'react-router-dom';
import Page from 'src/components/Page';

import './style.scss';

const Error = () => (
  <Page>
    <div className="error">
      <div className="clouds">
        <div className="cloud x1" />
        <div className="cloud x1_5" />
        <div className="cloud x2" />
        <div className="cloud x3" />
        <div className="cloud x4" />
        <div className="cloud x5" />
      </div>
      <div className="container-text">
        <div className="_404">404</div>
        <div className="p1">LA PAGE</div>
        <div className="p2">N'A PAS ÉTÉ TROUVÉ</div>
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </div>
    </div>
  </Page>
);

export default Error;

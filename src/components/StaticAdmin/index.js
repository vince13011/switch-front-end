import React from 'react';
import './style.scss';
import image from 'src/assets/images/staticAdmin-min.png';

import { Link } from 'react-router-dom';

// component only for Demo, to show how tha admin pannel look like 

const StaticAdmin = () => (

  <div>
    <p className="disclaimer">
      Ceci une image fixe du panneau d'administration (droits réservés),

      l'administrateur a la possibilité d'y consulter / modifier les articles (prix, stock etc.)

      d'y consulter / modifier les commandes (statut, numéro de suivi) et d'y créer un article
    </p>
    <div className="backtohome">
      <Link to="/" >  Retour au site</Link>
    </div>
    <div>
      <img src={image} alt="" />
    </div>
  </div>
);

export default StaticAdmin;

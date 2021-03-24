import React from 'react';
import './style.scss';
import image from 'src/assets/images/staticAdmin-min.png';

const StaticAdmin = () => (

  <div><p className="disclaimer">
   Ceci une image fixe du panneau d'administration (droits réserves),

l'administrateur a la possibilité d'y consulter / modifier les articles (prix, stock etc.)

d'y consulter / modifier les commandes (statut, numéro de suivi) et d'y créer un article
  </p>
    <img src={image} alt="" />
  </div>
);

export default StaticAdmin;

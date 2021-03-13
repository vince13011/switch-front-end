import React, { useEffect, useState } from 'react';
import './style.scss';
import { Link, Redirect } from 'react-router-dom';

const Success = () => {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    
    setTimeout(() => {
      setRedirect(true);
    }, 40000);
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (

    <div className="success__container">
      <div className="success__thankyou">
        <h1>Merci pour votre commande.</h1>

      </div>
      <Link to="/">retourner a la page d'accueil </Link>
    </div>
  );
};

export default Success;

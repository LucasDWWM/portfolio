import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_not-found.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Non Trouvée</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="back-home-link">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound;

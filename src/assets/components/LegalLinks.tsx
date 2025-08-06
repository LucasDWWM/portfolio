import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_legal-links.scss';

const LegalLinks: React.FC = () => {
  return (
    <div className="legal-links">
      <Link to="/mentions-legales" aria-label="Mentions légales">
        Mentions Légales
      </Link>
    </div>
  );
};

export default LegalLinks;

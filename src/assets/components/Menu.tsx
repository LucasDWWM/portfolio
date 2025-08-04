import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_menu.scss';

interface Props {
  isActive: boolean;
  toggleMenu(): void;
}

const Menu: React.FC<Props> = ({ isActive, toggleMenu }) => {
  return (
    <div
      className={`menu ${isActive ? 'active' : ''}`}
    >
      <ul className="p-8 space-y-6">
        <li>
          <Link to="/" onClick={toggleMenu} className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/projets" onClick={toggleMenu} className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition">
            Mes Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu} className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition">
            Contact
          </Link>
        </li>
        <li>
          <a href="/pdf/CV.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition">
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
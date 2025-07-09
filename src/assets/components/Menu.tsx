import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isActive: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isActive, toggleMenu }) => {
  return (
    <div className={`menu ${isActive ? 'active' : ''}`}>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
        <li><Link to="/projets" onClick={toggleMenu}>Mes projets</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><a href="/pdf/CV.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Télécharger mon CV</a></li>
      </ul>
    </div>
  );
};
export default Menu;
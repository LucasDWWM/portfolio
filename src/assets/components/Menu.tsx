import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_menu.scss';

interface Props {
  // boolean indique un type qui peut être vrai ou faux
  isActive: boolean;
  // void est un type qui indique qu'une fonction ne retourne pas de valeur
  toggleMenu(): void;
}

const Menu: React.FC<Props> = ({ isActive, toggleMenu }) => {
  return (
    <div
      className={`menu ${isActive ? 'active' : ''}`}
    >
       {/* p-8 space-y-6 = padding de 8 et espacement vertical de 6 */}
      <ul className="p-8 space-y-6">
        <li>
          {/* text-2xl veut dire que la taille du texte est de 2xl 
          font-bold veut dire que le texte est en gras
          tracking-wide veut dire que l'espacement des lettres est élargi
          hover:text-cyan-400 veut dire que la couleur du texte devient cyan-400 au survol
          transition veut dire que les changements de style sont animés
          */}
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
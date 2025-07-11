// src/components/Menu.tsx
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
      className={`
        menu
        fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40
        transform transition-transform duration-500 ease-in-out
        ${isActive ? 'translate-x-0' : 'translate-x-full'}
      `}>
      <ul className="p-6 space-y-4"> {/* Ajoutez du padding et de l'espacement avec Tailwind */}
        {[
          { to: '/', label: 'Accueil' },
          { to: '/projets', label: 'Mes projets' },
          { to: '/contact', label: 'Contact' },
        ].map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={toggleMenu} // Ferme le menu au clic sur un lien
              className="text-gray-800 hover:text-blue-500 text-xl block py-2" // Styles pour les liens
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/pdf/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-500 text-xl block py-2"
          >
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
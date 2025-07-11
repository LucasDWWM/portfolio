import React from 'react';
import '../styles/_header.scss'

//
// React.FC<T> (alias FunctionComponent<T>) est un type générique fourni par React :
// - Il indique que Header est un composant fonctionnel qui retourne un JSX.Element.
// - On lui passe en paramètre l’interface des props (ici HeaderProps).
// - Il inclut automatiquement la prop `children` dans le typage, même si ce composant ne l’utilise pas.
//

//
// Une interface en TypeScript sert à décrire la forme d’un objet :
// - Quels champs il doit contenir
// - Leurs types (string, number, fonction, etc.)
// - Éventuellement s’ils sont optionnels (prop?)
// - Et permet le structural typing (tout objet ayant au moins ces propriétés est conforme)
//


interface HeaderProps {
  logoText: string;
  toggleMenu: () => void;
  isActive: boolean;
}

const Header: React.FC<HeaderProps> = ({ logoText, toggleMenu, isActive }) => {
  return (
    <header>
      <h2 className="logo">{logoText}</h2>
      <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
    </header>
  );
};
export default Header;
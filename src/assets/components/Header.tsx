import React from 'react';

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
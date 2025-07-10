import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/_menu.scss'

interface Props {
  isActive: boolean
  toggleMenu(): void
}

const Menu: React.FC<Props> = ({ isActive, toggleMenu }) => {
  return (
    <div
      className={`
        ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul>
        {[
          { to: '/',       label: 'Accueil' },
          { to: '/projets', label: 'Mes projets' },
          { to: '/contact',  label: 'Contact' },
        ].map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500">
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
            className="text-gray-800 hover:text-blue-500">
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import '../styles/_layout.scss';
import LegalLinks from './LegalLinks';

interface LayoutProps {
  children: React.ReactNode
  pageTitle: string
}

// const Layout permet de définir la structure de la page
const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {

  // const [isActive, setIsActive] = useState(false) permet de gérer l'état d'activation du menu
  const [isActive, setIsActive] = useState(false)

  // useEffect permet de mettre à jour le titre de la page
  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  // toggleMenu permet de changer l'état d'activation du menu si on clique sur le bouton
  const toggleMenu = () => {
    setIsActive(prev => !prev)
  }

  return (
    <>
      <section className={`showcase ${isActive ? 'active' : ''}`}>
        <Header
          logoText="Lipari Lucas"
          toggleMenu={toggleMenu}
          isActive={isActive}
        />
        
        {/* Vidéo en arrière-plan */}
        <video
          // absolute inset-0 w-full ça veut dire que la vidéo prend toute la place de son conteneur 
          // w-full h-full veut dire que la vidéo prend toute la largeur et toute la hauteur de son conteneur
          // object-cover opacity-80 veut dire que la vidéo couvre tout l'espace disponible avec une opacité de 80%
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 video-background-adjusted"
          src="/videos/video_web.mp4"
          muted
          loop
          autoPlay
        />
        
        {/* Contenu visible */}
        <div className="relative z-20">
          {children}
          <SocialLinks />
          <LegalLinks />
        </div>

        {/* Menu mis dans la section */}
        <Menu isActive={isActive} toggleMenu={toggleMenu} />
      </section>
    </>
  )
}

export default Layout
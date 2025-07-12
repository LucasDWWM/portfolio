// src/components/Layout.tsx
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import '../styles/_layout.scss';

interface LayoutProps {
  children: React.ReactNode
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

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
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 video-background-adjusted"
          src="/videos/video_web.mp4"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20">{children}</div>
        <SocialLinks />
      </section>

      <Menu isActive={isActive} toggleMenu={toggleMenu} />
    </>
  )
}

export default Layout
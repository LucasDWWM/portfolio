import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import SocialLinks from './SocialLinks';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <><section className={`showcase ${isActive ? 'active' : ''}`}>
          <Header logoText="Lipari Lucas" toggleMenu={toggleMenu} isActive={isActive} />

          <video src="video_web.mp4" muted loop autoPlay></video>
          <div className="overlay"></div>
          {children} {/* CONTENU */}
          <SocialLinks />
      </section><Menu isActive={isActive} toggleMenu={toggleMenu} /></>
  );
};

export default Layout;
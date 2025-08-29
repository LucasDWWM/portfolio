import React, { useState, useEffect } from 'react';
import '../styles/_projects.scss';

type Project = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Gamifié",
    description: "Mon portfolio personnel, conçu pour présenter mes compétences en développement web de manière originale et interactive.",
    image: "/images/portfolio-preview.png",
    github: "https://github.com/LucasDWWM/portfolio",
    techs: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "Site Vitrine Sophie Bluel",
    description: "Développement d'un site vitrine pour une artiste, mettant en avant son travail et ses créations.",
    image: "/images/sophie_bluel-preview.png",
    live: "https://lucasdwwm.github.io/sophie_bluel/",
    github: "https://github.com/LucasDWWM/sophie_bluel",
    techs: ["HTML", "CSS" , "Javascript"],
  },
  {
    title: "Jeu : Tic Tac Toe",
    description: "Un mini-jeu développé en Swift avec animations.",
    image: "/images/tictactoe-preview.png",
    github: "https://github.com/LucasDWWM/TicTacToe",
    techs: ["Swift"],
  },
  {
    title: "Terre d'Espoir",
    description: "Site web pour l'association Terre d'Espoir.Il présente les actions de l'association et permet aux visiteurs de s'engager.",
    image: "/images/terre-d-Espoir-preview.png",
    live: "https://lucasdwwm.github.io/terre_d_espoir/",
    github: "https://github.com/LucasDWWM/terre_d_espoir",
    techs: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Oh My Food",
    description: "Site web pour un restaurant fictif, mettant en avant un design moderne et une expérience utilisateur fluide.",
    image: "/images/Ohmyfood_preview.png",
    live: "https://lucasdwwm.github.io/ohmyfood/",
    github: "https://github.com/LucasDWWM/ohmyfood",
    techs: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Kasa",
    description: "Site web pour une agence de location immobilière, avec un design épuré et une navigation intuitive.",
    image: "/images/kasa_preview.png",
    github: "https://github.com/LucasDWWM/kasa",
    techs: ["React", "SCSS"],
  },
  {
    title: "724 events",
    description: "Site web pour des événements, mettant en avant les fonctionnalités d'inscription et de gestion des événements.",
    image: "/images/724events-preview.png",
    github: "https://github.com/LucasDWWM/Debug_P9",
    techs: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Convertisseur d'Image en Art ASCII",
    description: "Site web permettant de convertir des images en art ASCII.",
    image: "/images/convertASCII_preview.png",
    live: "https://lucasdwwm.github.io/Convertisseur-d-Image-en-Art-ASCII/",
    github: "https://github.com/LucasDWWM/Convertisseur-d-Image-en-Art-ASCII",
    techs: ["HTML", "CSS", "Javascript"],
  },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalProjects = projects.length;

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prevActive) => (prevActive + 1) % totalProjects);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((prevActive) => (prevActive - 1 + totalProjects) % totalProjects);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="projects-carousel-section">
      <h2 className="projects-title">Mes Projets</h2>
      <p className="projects-subtitle">Une vitrine de mes expériences web et créatives.</p>

      <div className="carousel-container">
        <div className="slide-items">
          {projects.map((proj, i) => (
            <div key={i}>
              {/* En mobile, afficher le header avant l'image */}
              {isMobile && (
                <div className="project-header">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
              )}
              
              <div 
                className={`carousel-item ${
                  isMobile 
                  // ? '' : i === active ? 'active' : i === (active - 1 + totalProjects) % totalProjects ? 'prev' : i === (active + 1) % totalProjects ? 'next': '' 
                  // on demande si l'écran est en mode mobile puis on affiche l'image en fond et si elle est active alors on l'affiche
                    ? ''
                    : i === active
                    ? 'active'
                    // i === (active - 1 + totalProjects) % totalProjects veut dire que i est le projet précédent % veut dire que si on dépasse on revient au début
                    : i === (active - 1 + totalProjects) % totalProjects
                    ? 'prev'
                    // i === (active + 1) % totalProjects veut dire que i est le projet suivant // % veut dire que si on dépasse on revient au début
                    : i === (active + 1) % totalProjects
                    ? 'next'
                    : ''
                }`}
                style={{ backgroundImage: `url(${proj.image})` }}
                  onClick={() => {
                  if (isMobile) {
                      const link = proj.live || proj.github;
                      if (link) {
                        window.open(link, "_blank");
                      }
                    }
                  }}
              >
                {/* Header visible uniquement sur desktop pour la slide active */}
                {!isMobile && i === active && (
                  <div className="project-header">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                  </div>
                )}

                {/* Contenu technique */}
                <div className="project-content">
                  <div className="techs">
                    {proj.techs.map((t, idx) => <span key={idx}>{t}</span>)}
                  </div>
                  <div className="buttons-links">
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn live">
                        🌐 Site
                      </a>
                    )}
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn github">
                        💻 Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contrôles visibles uniquement sur desktop */}
        {!isMobile && (
          <>
            <div className="carousel-controls">
              <button className="btn-control prev" onClick={prevSlide}>&lt;</button>
              <button className="btn-control next" onClick={nextSlide}>&gt;</button>
            </div>
            <div className="carousel-pagination">
              {projects.map((_, i) => (
                <span key={i} className={`dot ${i === active ? 'active' : ''}`}></span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
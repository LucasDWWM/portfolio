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
  const [active, setActive] = useState(0); // Index du projet actif
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalProjects = projects.length;

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

  // Met fin à la transition après un court délai pour permettre une nouvelle animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Durée de la transition CSS
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
            <div className={`carousel-item ${
                i === active
                  ? 'active'
                  : i === (active - 1 + totalProjects) % totalProjects
                  ? 'prev'
                  : i === (active + 1) % totalProjects
                  ? 'next'
                  : ''
                }`}
                style={{ backgroundImage: `url(${proj.image})` }}
                key={i}
              >
              {/* Titre et description du projet visible uniquement sur la slide active */}
              {i === active && (
                <div className="project-header">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
              )}

              {/* Contenu projet technique spécifique */}
              <div className="project-content">
                <div className="techs">
                  {proj.techs.map((t, idx) => <span key={idx}>{t}</span>)}
                </div>
                <div className="buttons-links">
                  {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn live">🌐 Site</a>}
                  {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn github">💻 Code</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="btn-control prev" onClick={prevSlide}>&lt;</button>
          <button className="btn-control next" onClick={nextSlide}>&gt;</button>
        </div>
        {/* Pagination Dots */}
        <div className="carousel-pagination">
          {projects.map((_, i) => (
            <span key={i} className={`dot ${i === active ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
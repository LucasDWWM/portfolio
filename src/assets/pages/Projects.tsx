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
    description: "Mon portfolio personnel, conçu pour présenter mes compétences en développement web de manière originale et interactive, inspirée par l'univers des jeux vidéo. Il utilise une vidéo de fond pour créer une immersion et une navigation fluide grâce à React Router.",
    techs: ["React", "TypeScript", "SCSS"],
    image: "/images/portfolio-preview.png",
    github: "https://github.com/LucasDWWM/portfolio",
  },
  {
    title: "Site Vitrine GRETA",
    description: "Développement d'un site web vitrine complet pour une association dans le cadre de ma formation avec le GRETA. Ce projet m'a permis de travailler en équipe et d'appliquer des principes de conception web pour un client réel.",
    techs: ["HTML", "CSS"],
    image: "/images/greta-project-preview.png",
  },
  {
    title: "Jeu : Tic Tac Toe",
    description: "Un mini-jeu développé en Swift avec animations.",
    techs: ["Swift"],
    image: "/images/tictactoe-preview.png",
  },
  {
    title: "Terre d'Espoir",
    description: "On accueille des personnes en fin de peine pour les aider à préparer leur retour à la vie en société. Pendant 6 à 12 mois, les résidents vivent dans un cadre paisible, humain et structurant. Ils retrouvent un quotidien simple : des repas partagés, des discussions, des activités collectives. C’est un temps pour se poser, se reconnecter, réapprendre à vivre avec les autres.",
    image: "/images/terre-d-Espoir-preview.png",
    live: "https://lucasdwwm.github.io/terre_d_espoir/",
    github: "https://github.com/LucasDWWM/terre_d_espoir",
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
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="techs">
                  {proj.techs.map((t, idx) => <span key={idx}>{t}</span>)}
                </div>
                <div className="buttons-links">
                  {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn live">🌐 Voir</a>}
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
      </div>
    </section>
  );
};

export default Projects;
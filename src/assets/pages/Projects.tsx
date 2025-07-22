import React from 'react';
import '../styles/_projects.scss';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Gamifié (Ce site !)",
    subtitle: "Démarquez-vous avec une expérience unique",
    description:
      "Mon portfolio personnel, conçu pour présenter mes compétences en développement web de manière originale et interactive, inspirée par l'univers des jeux vidéo.",
    imageUrl: "/images/portfolio-preview.png",
    githubLink: "https://github.com/LucasDWWM/portfolio",
    technologies: ["React", "TypeScript", "Bun", "TailwindCSS", "SCSS", "Vite", "React Router"],
  },
  {
    id: 2,
    title: "Site Vitrine avec le GRETA",
    subtitle: "Projet de groupe pour une association",
    description:
      "Développement d'un site vitrine pour une association dans le cadre de ma formation avec le GRETA. Expérience collaborative autour d'un client réel.",
    imageUrl: "/images/greta-project-preview.png",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "Jeu : Tic Tac Toe 🎲",
    subtitle: "Une implémentation amusante et interactive",
    description:
      "Une version moderne du Tic Tac Toe, développée pour explorer les animations front-end et la logique de jeu. Interface fun et accessible.",
    imageUrl: "/images/tictactoe-preview.png",
    technologies: ["Swift"],
  },
  {
    id: 4,
    title: "Terre d'Espoir",
    subtitle: "Cultiver la terre semée des secondes chances",
    description:
      "Un projet humain visant à accompagner la réinsertion de personnes en fin de peine à travers un environnement paisible, structurant et collectif.",
    imageUrl: "/images/terre-d-Espoir-preview.png",
    liveLink: "https://lucasdwwm.github.io/terre_d_espoir/",
    githubLink: "https://github.com/LucasDWWM/terre_d_espoir",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projets" className="projects-container">
      <div className="text-content">
        <h2>Mes Projets</h2>
        <p>
          Découvrez une sélection de mes réalisations. Chaque projet reflète ma passion du code et mon envie constante de progresser.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-body">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    🔗 Voir en ligne
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    🛠️ Code GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

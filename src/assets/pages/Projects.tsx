import React from 'react';
import '../styles/_projects.scss';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string; // Chemin vers une image de prévisualisation (capture d'écran, logo, etc.)
  liveLink?: string; // Lien vers le projet déployé (optionnel)
  githubLink?: string; // Lien vers le dépôt GitHub (optionnel)
  technologies: string[]; // Liste des technologies utilisées
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Gamifié (Ce site !)",
    subtitle: "Démarquez-vous avec une expérience unique",
    description: "Mon portfolio personnel, conçu pour présenter mes compétences en développement web de manière originale et interactive, inspirée par l'univers des jeux vidéo. Il utilise une vidéo de fond pour créer une immersion et une navigation fluide grâce à React Router.",
    imageUrl: "/images/portfolio-preview.png", // Créez une image pour ça !
    githubLink: "https://github.com/LucasDWWM/portfolio", // Mettez le lien de votre dépôt réel
    technologies: ["React", "TypeScript", "Bun", "TailwindCSS", "SCSS", "Vite", "React Router"],
  },
  {
    id: 2,
    title: "Site Vitrine avec le GRETA",
    subtitle: "Projet de groupe pour une association",
    description: "Développement d'un site web vitrine complet pour une association dans le cadre de ma formation avec le GRETA. Ce projet m'a permis de travailler en équipe et d'appliquer des principes de conception web pour un client réel.",
    imageUrl: "/images/greta-project-preview.png", // Capture d'écran du site GRETA
    technologies: ["HTML", "CSS"], // Technologies du projet GRETA
  },
  {
    id: 3,
    title: "Jeu : Tic Tac Toe 🎲",
    subtitle: "Une implémentation amusante et interactive",
    description: "Une version moderne du classique Tic Tac Toe, développée pour explorer les animations front-end et la logique de jeu. Ce projet met en avant ma capacité à créer des expériences utilisateur engageantes et réactives.",
    imageUrl: "/images/tictactoe-preview.png", // Capture d'écran du jeu
    technologies: ["Swift"],
  },

  {
    id: 4,
    title: "Terre d'Espoir",
    subtitle: "cultiver la terre semée des secondes chances",
    description: "On accueille des personnes en fin de peine pour les aider à préparer leur retour à la vie en société. Pendant 6 à 12 mois, les résidents vivent dans un cadre paisible, humain et structurant. Ils retrouvent un quotidien simple : des repas partagés, des discussions, des activités collectives. C’est un temps pour se poser, se reconnecter, réapprendre à vivre avec les autres.",
    imageUrl: "/images/terre-d-Espoir-preview.png", // Capture d'écran du jeu
    liveLink: "https://lucasdwwm.github.io/terre_d_espoir/",
    githubLink: "https://github.com/LucasDWWM/terre_d_espoir", // Mettez le lien de votre dépôt réel
    technologies: ["HTML", "CSS" , "Javascript"],
  },

  // Ajoutez d'autres projets ici
  // {
  //   id: 4,
  //   title: "Votre Prochain Projet...",
  //   subtitle: "Montrez ce que vous avez appris et ce que vous pouvez faire",
  //   description: "Description de votre nouveau projet, etc.",
  //   imageUrl: "/images/new-project.jpg",
  //   liveLink: "https://example.com/new-project",
  //   githubLink: "https://github.com/LucasDWWM/new-project",
  //   technologies: ["Next.js", "TypeScript", "GraphQL", "MongoDB"],
  // },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="text-content">
        <h1>Mes Projets</h1>
        <p>
          Découvrez une sélection de mes réalisations. Chaque projet est une opportunité d'apprendre
          et de mettre en œuvre des solutions créatives et performantes.
          Mon objectif est de toujours me démarquer et de construire des expériences web uniques.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={`Preview de ${project.title}`} className="project-image" />
            <div className="project-info">
              <h4>{project.title}</h4>
              <h5>{project.subtitle}</h5>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Voir le projet
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Code Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
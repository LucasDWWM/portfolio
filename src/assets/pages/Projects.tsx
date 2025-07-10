import React from 'react';
import '../styles/_projects.scss'

const Projects: React.FC = () => {
  return (
      <div className="text">
        <h2>Mes</h2>
        <h3>Projets</h3>
        <p>Voici un autre projet que j'ai créé, <br/>
        Ces projets ont pour but de me démarquer des autres développeurs. </p>
        <a href="video_web02.mp4">Un Site vitrine avec le <strong>GRETA</strong>.</a>
        <a href="Tic TaC TOE LUCAS.mp4">Bande-Annonce</a>
      </div>
  );
};
export default Projects;
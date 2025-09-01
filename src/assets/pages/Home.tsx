import React from "react";
import '../styles/_home.scss';

const Home: React.FC = () => {
    return (
        <div className="home-text-content">
            <h1>Votre</h1>
            <h2>Développeur Web</h2>
            <p>
                Bienvenue sur mon portfolio 👨‍💻 <br />
                Je me présente Lipari Lucas, je suis en études Pré MSC chez Epitech<br />
                Je suis <strong className="font-bold">Passionné</strong>, <strong className="font-bold">Curieux</strong>, <strong className="font-bold">Motivé</strong> ... JE SUIS <strong className="font-bold">VOTRE</strong> DEVELOPPEUR WEB
            </p>
            <a href="/pdf/CV.pdf">Télécharger mon CV</a>
        </div>
    );
};

export default Home;
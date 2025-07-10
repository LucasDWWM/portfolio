// src/assets/pages/Home.tsx
import React from "react";
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout pageTitle="Accueil">
      <div className="text-white">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight uppercase">
          Votre<br/>Développeur Web
        </h1>
        <p className="text-lg mb-6 max-w-[700px] font-normal">
          Bienvenue sur mon portfolio 👨‍💻 <br/>
          Je me présente Lipari Lucas, je suis actuellement en recherche de travail.<br/>
          Je suis <strong className="font-bold">Passionné</strong>, <strong className="font-bold">Curieux</strong>, <strong className="font-bold">Motivé</strong> ... JE SUIS <strong className="font-bold">VOTRE</strong> DEVELOPPEUR WEB
        </p>
        <a
          href="/pdf/CV.pdf"
          className="inline-block font-medium text-base bg-white px-8 py-3 uppercase text-gray-900 tracking-widest transition-all duration-200 hover:tracking-[6px] mt-2"
        >
          Télécharger mon CV
        </a>
      </div>
    </Layout>
  );
};

export default Home;
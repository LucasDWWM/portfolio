import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";
import Layout from "./assets/components/Layout";
import LegalMentions from "./assets/pages/LegalMentions";
import NotFound from "./assets/components/NotFound";
import "./assets/styles/main.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout pageTitle="Accueil"><Home /></Layout>}/>
        <Route path="/projets" element={<Layout pageTitle="Mes Projets"><Projects /></Layout>}/>
        <Route path="/contact" element={<Layout pageTitle="Contact"><Contact /></Layout>}/>
        <Route path="/mentions-legales" element={<Layout pageTitle="Mentions Légales"><LegalMentions /></Layout>}/>
        <Route path="*" element={<Layout pageTitle="Page Non Trouvée"><NotFound /></Layout>}/>
      </Routes>
    </Router>
  );
}
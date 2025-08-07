import '../styles/_legal-links.scss';

const LegalMentions = () => {
  return (
    <div className="legal-mentions-container">
      <h2>Mentions Légales</h2>

      <section>
        <h3>ÉDITEUR DU SITE</h3>
        <p>Nom : Lucas Lipari</p>
        <p>Adresse : 06110 Grasse, France</p>
        <p>Contact : <a href="mailto:lucaslipari06@gmail.com">lucaslipari06@gmail.com</a></p>

      </section>

      <section>
        <h3>HÉBERGEUR</h3>
        <p>Ce site est hébergé par la société Alwaysdata.</p>
        <p>Raison sociale : Alwaysdata SARL</p>
        <p>Siège social : 91 rue du Faubourg Saint Honoré - 75008 Paris, France</p>
        <p>Contact : <a href="https://www.alwaysdata.com/contact" target="_blank" rel="noopener noreferrer">Formulaire de contact</a></p>
      </section>
    </div>
  );
};

export default LegalMentions;

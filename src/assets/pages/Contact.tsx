import React, { useState } from 'react';
import '../styles/_contact.scss';

// useState permet de gérer l'état des champs du formulaire
const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Gestion de l'envoi du formulaire
  // const handleSubmit = async (e: React.FormEvent) veut dire que l'on crée une fonction asynchrone qui gère l'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      // Envoi du formulaire via fetch'
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Elle permet de transformer les valeurs des champs email et message en un format compréhensible par le serveur
        body: new URLSearchParams({ email, message }).toString(),
      });
      if (response.ok) {
        setStatus('Merci, votre message a été envoyé ! Je vous répondrai dans les plus brefs délais.');
        // Réinitialiser les champs du formulaire
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json(); // Tenter de lire le message d'erreur du serveur
        setStatus(`Erreur lors de l'envoi du message : ${errorData.message || 'Veuillez réessayer plus tard.'}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('Une erreur est survenue lors de l\'envoi. Veuillez vérifier votre connexion ou réessayer.');
    }
  };

  return (
    <div className="contact-container">
      <div className="text-content">
        <h2>Contactez-moi</h2>
        <p>
          Que ce soit pour une opportunité d'emploi, une collaboration sur un projet, ou simplement pour échanger,
          n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles discussions !
        </p>
      </div>

      <div className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Votre Email :</label>
            <input
              type="email"
              placeholder="Votre email : "
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // e.target.value c'est l'input de l'email
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message :</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // e.target.value c'est l'input du message
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Envoyer le message</button>
          {status && <p className="status-message">{status}</p>}
        </form>

        <div className="contact-info">
          <h3>Informations Directes</h3>
          <p>
            <img src="/images/at-solid.svg" alt="Email Icon" className="icon" />
            <a href="mailto:lucaslipari06@gmail.com">lucasapple06@gmail.com</a>
          </p>
          <p>
            <img src="/images/linkedin-brands.svg" alt="LinkedIn Icon" className="icon" />
            <a href="https://www.linkedin.com/in/lucas-lipari-868369233/" target="_blank" rel="noopener noreferrer"> Linkedin</a>
          </p>
          <p>
            <img src="/images/github-brands.svg" alt="GitHub Icon" className="icon" />
            <a href="https://github.com/LucasDWWM" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
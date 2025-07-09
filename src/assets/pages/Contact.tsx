import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await fetch('/api/send-email', { // Nouvelle API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('Merci, votre message a été envoyé !');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('Une erreur est survenue.');
    }
  };

  return (
    <Layout pageTitle="Contactez-moi">
      <div className="text">
        <h2>Contactez-moi</h2>
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Votre Email :</label>
            <br />
            <input
              type="email"
              placeholder="Ex : example@gmail.com"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="message">Message :</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit">Envoyer le message</button>
            {status && <p>{status}</p>} {/* Afficher le statut de l'envoi */}
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
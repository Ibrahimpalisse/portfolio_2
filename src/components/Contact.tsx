import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page-content">
      <div className="contact-container">
        <h2 className="section-title">Contacter moi</h2>
        
        <div className="contact-card">
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="contact-icon-marker">&#x1F4CD;</i>
              </div>
              <div className="contact-info">
                <h3>Localisation</h3>
                <p>Marseille</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="contact-icon-phone">&#x1F4DE;</i>
              </div>
              <div className="contact-info">
                <h3>Téléphone</h3>
                <p><a href="tel:0763883720">07.63.88.37.20</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="contact-icon-email">&#x1F4E7;</i>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>ibrahim.vignes@laplateforme.io</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="devicon-github-original"></i>
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Voir mon profil GitHub</a></p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 className="contact-form-title">Envoyez-moi un message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Votre message"></textarea>
              </div>
              
              <button type="submit" className="submit-button">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
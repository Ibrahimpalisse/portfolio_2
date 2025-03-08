import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="page-content">
      <div className="cv-container">
        <h2 className="section-title">Mon CV</h2>
        
        <div className="cv-section">
          <h3 className="cv-section-title">
            <span className="cv-icon">&#x1F4BC;</span>
            Expérience professionnelle
          </h3>
          <div className="cv-content">
            <div className="cv-item">
              <div className="cv-item-content">
                <p>Entreprise familiale - au maroc e-d-p essences de parfums</p>
                <p className="cv-details">Préparation de commande de parfum</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>Stage dans le numérique à l'école de la Plateforme (1 mois) 2024</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>Entreprise atelier - réalisation des site web et mobil</p>
                <p className="cv-details">HTML - CSS - PHP - MySQL</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>Entreprise atelier - réalisation des site web et mobil</p>
                <p className="cv-details">React - Tailwind - Node.js - SQLite</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-section">
          <h3 className="cv-section-title">
            <span className="cv-icon">&#x1F393;</span>
            Éducation
          </h3>
          <div className="cv-content">
            <div className="cv-item">
              <div className="cv-item-content">
                <p>École privée 2010-2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-section">
          <h3 className="cv-section-title">
            <span className="cv-icon">&#x1F4DA;</span>
            Formations
          </h3>
          <div className="cv-content">
            <div className="cv-item">
              <div className="cv-item-date">2023-2024</div>
              <div className="cv-item-content">
                <p>CIERES Pic Axe 2 pour validation d'un projet professionnel - Marseille</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-date">2024</div>
              <div className="cv-item-content">
                <p>École de la Deuxième Chance Remise à Niveau et construction du projet professionnel</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-date">2024</div>
              <div className="cv-item-content">
                <p>Développeur Web et Mobile à l'école La Plateforme</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-section">
          <h3 className="cv-section-title">
            <span className="cv-icon">&#x1F3A8;</span>
            Intérêts et Loisirs
          </h3>
          <div className="cv-content">
            <ul className="cv-list">
              <li>Les manhua (manga chinois)</li>
              <li>Les manhwa (manga coréen)</li>
              <li>Light Novels (xianxia)</li>
            </ul>
          </div>
        </div>
        
        <div className="cv-section">
          <h3 className="cv-section-title">
            <span className="cv-icon">&#x1F4DE;</span>
            Contact
          </h3>
          <div className="cv-content">
            <div className="cv-contact-grid">
              <div className="cv-contact-item">
                <div className="cv-contact-icon">&#x1F4CD;</div>
                <div className="cv-contact-label">Localisation :</div>
                <div className="cv-contact-value">Marseille</div>
              </div>
              
              <div className="cv-contact-item">
                <div className="cv-contact-icon">&#x1F4DE;</div>
                <div className="cv-contact-label">Téléphone :</div>
                <div className="cv-contact-value">07.63.88.37.20</div>
              </div>
              
              <div className="cv-contact-item">
                <div className="cv-contact-icon">&#x1F4E7;</div>
                <div className="cv-contact-label">Email :</div>
                <div className="cv-contact-value">ibrahim.vignes@laplateforme.io</div>
              </div>
              
              <div className="cv-contact-item">
                <div className="cv-contact-icon"><i className="devicon-github-original"></i></div>
                <div className="cv-contact-label">GitHub :</div>
                <div className="cv-contact-value"><a href="https://github.com/Ibrahimpalisse" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Voir mon profil GitHub</a></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-actions">
          <a href="#" className="download-button">
            <i className="download-icon">&#x2193;</i>
            Télécharger le CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV; 
import React, { useState } from 'react';

// Définir un type pour les sections
type CVSection = 'experience' | 'education' | 'formations' | 'interests' | 'contact';

const CV: React.FC = () => {
  // État pour suivre les sections ouvertes/fermées
  const [openSections, setOpenSections] = useState({
    experience: true,
    education: false,
    formations: false,
    interests: false,
    contact: false
  });

  // Fonction pour basculer l'état d'une section
  const toggleSection = (section: CVSection) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="page-content cv-container">
      <h2 className="section-title">Mon CV</h2>
      
      {/* Accordéon - Section Expérience professionnelle */}
      <div className="cv-accordion">
        <div 
          className={`cv-accordion-header ${openSections.experience ? 'active' : ''}`}
          onClick={() => toggleSection('experience')}
        >
          <div className="cv-accordion-icon-container">
            <span className="cv-icon cv-icon-experience">💼</span>
          </div>
          <h3>Expérience professionnelle</h3>
          <div className="cv-accordion-bars">
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
          </div>
          <div className="cv-accordion-arrow">
            <i>{openSections.experience ? '▼' : '▲'}</i>
          </div>
        </div>
        
        {openSections.experience && (
          <div className="cv-accordion-content">
            <div className="cv-item">
              <div className="cv-item-content">
                <p>- Entreprise familiale - au maroc e-d-p essences de parfums</p>
                <p className="cv-details">Préparation de commande de parfum.</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>- Stage dans le numérique à l'école de la Plateforme (1 mois) 2024.</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>- Entreprise atelier - réalisation des site web et mobil</p>
                <p className="cv-details">HTML - CSS - PHP - MySQL.</p>
              </div>
            </div>
            
            <div className="cv-item">
              <div className="cv-item-content">
                <p>- Entreprise atelier - réalisation des site web et mobil</p>
                <p className="cv-details">React - Tailwind - Node.js - SQLite.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Accordéon - Section Éducation */}
      <div className="cv-accordion">
        <div 
          className={`cv-accordion-header ${openSections.education ? 'active' : ''}`}
          onClick={() => toggleSection('education')}
        >
          <div className="cv-accordion-icon-container">
            <span className="cv-icon cv-icon-education">🎓</span>
          </div>
          <h3>Éducation</h3>
          <div className="cv-accordion-bars">
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
          </div>
          <div className="cv-accordion-arrow">
            <i>{openSections.education ? '▼' : '▲'}</i>
          </div>
        </div>
        
        {openSections.education && (
          <div className="cv-accordion-content">
            <div className="cv-item">
              <div className="cv-item-content">
                <p>École privée 2010-2023</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Accordéon - Section Formations */}
      <div className="cv-accordion">
        <div 
          className={`cv-accordion-header ${openSections.formations ? 'active' : ''}`}
          onClick={() => toggleSection('formations')}
        >
          <div className="cv-accordion-icon-container">
            <span className="cv-icon cv-icon-formations">📚</span>
          </div>
          <h3>Formations</h3>
          <div className="cv-accordion-bars">
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
          </div>
          <div className="cv-accordion-arrow">
            <i>{openSections.formations ? '▼' : '▲'}</i>
          </div>
        </div>
        
        {openSections.formations && (
          <div className="cv-accordion-content">
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
        )}
      </div>

      {/* Accordéon - Section Intérêts et Loisirs */}
      <div className="cv-accordion">
        <div 
          className={`cv-accordion-header ${openSections.interests ? 'active' : ''}`}
          onClick={() => toggleSection('interests')}
        >
          <div className="cv-accordion-icon-container">
            <span className="cv-icon cv-icon-interests">🎨</span>
          </div>
          <h3>Intérêts et Loisirs</h3>
          <div className="cv-accordion-bars">
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
          </div>
          <div className="cv-accordion-arrow">
            <i>{openSections.interests ? '▼' : '▲'}</i>
          </div>
        </div>
        
        {openSections.interests && (
          <div className="cv-accordion-content">
            <ul className="cv-list">
              <li>Les manhua (manga chinois)</li>
              <li>Les manhwa (manga coréen)</li>
              <li>Light Novels (xianxia)</li>
            </ul>
          </div>
        )}
      </div>

      {/* Accordéon - Section Contact */}
      <div className="cv-accordion">
        <div 
          className={`cv-accordion-header ${openSections.contact ? 'active' : ''}`}
          onClick={() => toggleSection('contact')}
        >
          <div className="cv-accordion-icon-container">
            <span className="cv-icon cv-icon-contact">📞</span>
          </div>
          <h3>Contact</h3>
          <div className="cv-accordion-bars">
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
            <span className="accordion-bar"></span>
          </div>
          <div className="cv-accordion-arrow">
            <i>{openSections.contact ? '▼' : '▲'}</i>
          </div>
        </div>
        
        {openSections.contact && (
          <div className="cv-accordion-content">
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
        )}
      </div>

      <div className="cv-actions">
        <a href="#" className="download-button">
          <i className="download-icon">&#x2193;</i>
          Télécharger le CV
        </a>
      </div>
    </div>
  );
};

export default CV; 
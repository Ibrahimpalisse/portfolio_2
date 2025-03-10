import React, { useState, useEffect } from 'react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleLinkClick = (sectionId: string) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'projects', label: 'Projets', icon: '💻' },
    { id: 'skills', label: 'Compétences', icon: '📝' },
    { id: 'cv', label: 'CV', icon: '📄' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      {/* Hamburger menu pour mobile */}
      {isMobile && (
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      )}

      <div className={`sidebar ${isMobile ? 'mobile' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
        <img 
          src="/night-sky-image.jpg" 
          alt="Night Sky" 
          className="sidebar-image"
        />
        <div className="sidebar-content">
          {/* Logo ou photo de profil */}
          <div className="profile-section">
            <div className="profile-pic-container">
              <div className="profile-pic-placeholder">
                <span>VI</span>
              </div>
            </div>
            <h3 className="sidebar-name">Vignes Ibrahim</h3>
            <div className="sidebar-tag">
              <span className="tag-badge">Full Stack</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <ul>
              {navItems.map(({ id, label, icon }) => (
                <li 
                  key={id}
                  className={`nav-item ${activeSection === id ? 'active' : ''}`}
                >
                  <a 
                    href={`#${id}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(id);
                    }}
                  >
                    <i className="nav-icon">{icon}</i>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton de téléchargement du CV */}
          <div className="cv-download">
            <a href="#" className="download-button">
              <i className="download-icon">⬇️</i>
              Télécharger CV
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="social-links">
            <a href="#" className="social-icon">
              <i>🔗</i>
            </a>
            <a href="#" className="social-icon">
              <i>📧</i>
            </a>
            <a href="#" className="social-icon">
              <i>💻</i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 
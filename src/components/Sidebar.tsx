import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
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
            <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">
                <i className="nav-icon">&#x2302;</i>
                <span>Accueil</span>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/projects' ? 'active' : ''}`}>
              <Link to="/projects" className="nav-link">
                <i className="nav-icon">&#x1F4BB;</i>
                <span>Projets</span>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/skills' ? 'active' : ''}`}>
              <Link to="/skills" className="nav-link">
                <i className="nav-icon">&#x1F4DC;</i>
                <span>Compétences</span>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/cv' ? 'active' : ''}`}>
              <Link to="/cv" className="nav-link">
                <i className="nav-icon">&#x1F4C4;</i>
                <span>CV</span>
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
              <Link to="/contact" className="nav-link">
                <i className="nav-icon">&#x1F4AC;</i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bouton de téléchargement du CV */}
        <div className="cv-download">
          <a href="#" className="download-button">
            <i className="download-icon">&#x2193;</i>
            Télécharger CV
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="social-links">
          <a href="#" className="social-icon">
            <i>&#x1F517;</i>
          </a>
          <a href="#" className="social-icon">
            <i>&#x1F4E7;</i>
          </a>
          <a href="#" className="social-icon">
            <i>&#x1F4BB;</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
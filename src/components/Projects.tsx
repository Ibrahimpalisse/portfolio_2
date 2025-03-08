import React from 'react';

// Types pour les projets
interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link: string | null;
  github: string | null;
}

const Projects: React.FC = () => {
  // Function to generate placeholder images with different colors
  const getPlaceholderImage = (id: number) => {
    const colors = ['4361ee', '4cc9f0', '3a0ca3', '7209b7', 'f72585'];
    const color = colors[id % colors.length];
    return `https://via.placeholder.com/1000x600/${color}/FFFFFF?text=Projet+${id}`;
  };

  // Exemples de projets
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Interactif",
      description: "Un portfolio moderne avec des animations fluides et une interface intuitive, développé avec React et Tailwind CSS.",
      imageSrc: getPlaceholderImage(1),
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/username/portfolio"
    },
    {
      id: 2,
      title: "Application E-commerce",
      description: "Une plateforme e-commerce complète avec système de paiement, gestion des produits et interface administrateur.",
      imageSrc: getPlaceholderImage(2),
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      link: null,
      github: "https://github.com/username/ecommerce"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord d'analyse de données avec graphiques interactifs et rapports personnalisables.",
      imageSrc: getPlaceholderImage(3),
      technologies: ["React", "D3.js", "Firebase"],
      link: "https://dashboard-project.com",
      github: null
    },
    {
      id: 4,
      title: "Application Météo",
      description: "Application météo en temps réel qui utilise la géolocalisation et des API externes pour fournir des prévisions précises.",
      imageSrc: getPlaceholderImage(4),
      technologies: ["JavaScript", "API REST", "HTML/CSS"],
      link: null,
      github: null
    }
  ];

  return (
    <div className="page-content">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="note-message" style={{ marginBottom: '2rem' }}>
          <p>
            <strong>Note:</strong> Les projets sans liens actifs sont marqués comme "inaccessibles".
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <div className="project-image" style={{ backgroundImage: `url(${project.imageSrc})` }}></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button primary-button">
                      Voir le projet
                    </a>
                  ) : (
                    <button className="project-button disabled-button" disabled>
                      Projet inaccessible
                    </button>
                  )}
                  
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button secondary-button">
                      Code source
                    </a>
                  ) : (
                    <button className="project-button disabled-button" disabled>
                      Code source
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 
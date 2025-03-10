import React, { useEffect } from 'react';
import 'devicon/devicon.min.css';

const Skills: React.FC = () => {
  useEffect(() => {
    // Simuler le remplissage des barres de compétences
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-level');
      if (level) {
        (skill as HTMLElement).style.setProperty('--level', `${level}%`);
      }
    });
  }, []);

  return (
    <div className="page-content">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        
        {/* Front-end */}
        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">&#x1F310;</span>
            Technologies Front-end
          </h3>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-html5-plain colored"></i>
              </div>
              <div className="skill-name">HTML5</div>
              <div className="skill-level" data-level="70"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-css3-plain colored"></i>
              </div>
              <div className="skill-name">CSS3</div>
              <div className="skill-level" data-level="80"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-javascript-plain colored"></i>
              </div>
              <div className="skill-name">JavaScript</div>
              <div className="skill-level" data-level="40"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-react-original colored"></i>
              </div>
              <div className="skill-name">React.js</div>
              <div className="skill-level" data-level="30"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-tailwindcss-plain colored"></i>
              </div>
              <div className="skill-name">Tailwind CSS</div>
              <div className="skill-level" data-level="30"></div>
            </div>
          </div>
        </div>
        
        {/* Back-end */}
        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">&#x1F5A5;</span>
            Technologies Back-end
          </h3>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-php-plain colored"></i>
              </div>
              <div className="skill-name">PHP</div>
              <div className="skill-level" data-level="70"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-mysql-plain colored"></i>
              </div>
              <div className="skill-name">MySQL</div>
              <div className="skill-level" data-level="50"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-nodejs-plain colored"></i>
              </div>
              <div className="skill-name">Node.js</div>
              <div className="skill-level" data-level="10"></div>
            </div>
          </div>
        </div>
        
        {/* Outils */}
        <div className="skills-category">
          <h3 className="category-title">
            <span className="category-icon">&#x1F6E0;</span>
            Outils & Environnements
          </h3>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-git-plain colored"></i>
              </div>
              <div className="skill-name">Git</div>
              <div className="skill-level" data-level="65"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-docker-plain colored"></i>
              </div>
              <div className="skill-name">Docker</div>
              <div className="skill-level" data-level="60"></div>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <i className="devicon-figma-plain colored"></i>
              </div>
              <div className="skill-name">Figma</div>
              <div className="skill-level" data-level="65"></div>
            </div>
          </div>
        </div>
        
        <div className="skills-explanation">
          <p>
            Ces barres indiquent mon niveau de maîtrise pour chaque technologie,
            basé sur mon expérience pratique et mes connaissances techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills; 
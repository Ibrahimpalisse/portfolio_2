import React, { useState, useEffect, useRef, RefObject } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CV from './components/CV';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import './App.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setIsLoaded(true);

    // Configuration de l'Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          // Mise à jour de l'URL sans rechargement
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observer chaque section
    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    // Gestion du scroll fluide pour les ancres
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Vérifier le hash initial
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const sections = [
    { id: 'home', title: '', component: (
      <div className="home-container content-container">
        <div className={`text-content ${isLoaded ? 'fade-in' : ''}`}>
          <h2 className="greeting">Bonjour,</h2>
          <h1 className="name">Je suis Vignes</h1>
          <h1 className="name">Ibrahim</h1>
          <p className="title">développeur web</p>
          <p className="description">Passionné par le développement d'applications web modernes et créatives. En tant que développeur full stack, je maîtrise à la fois les technologies front-end et back-end pour créer des expériences utilisateur complètes et performantes.</p>
        </div>
        <div className={`code-icon desktop-icon ${isLoaded ? 'fade-in' : ''}`}>
          &lt;/&gt;
        </div>
      </div>
    )},
    { id: 'projects', title: 'Projets', component: <Projects /> },
    { id: 'skills', title: 'Compétences', component: <Skills /> },
    { id: 'cv', title: 'CV', component: <CV /> },
    { id: 'contact', title: 'Contact', component: <Contact /> }
  ];

  const setSectionRef = (el: HTMLDivElement | null, id: string) => {
    if (sectionsRef.current) {
      sectionsRef.current[id] = el;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} />
      <div className="main-content">
        {sections.map(({ id, title, component }) => (
          <div
            key={id}
            id={id}
            ref={(el) => setSectionRef(el, id)}
            className={`section ${activeSection === id ? 'active' : ''}`}
          >
            {title && <h2 className="section-title">{title}</h2>}
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Assurer que le viewport est correctement défini pour les mobiles
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    } else {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }
    
    // Ajouter une classe au body pour améliorer l'expérience mobile
    document.body.classList.add('has-contact-form');
    
    return () => {
      document.body.classList.remove('has-contact-form');
    };
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Réinitialiser l'erreur lorsque l'utilisateur commence à taper
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulation d'un envoi de formulaire
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="page-content">
      <div className={`contact-container ${isLoaded ? 'fade-in' : ''}`}>
        <h1 className="section-title">Me Contacter</h1>
        
        <div className="contact-card">
          {submitted ? (
            <div className="success-message">
              <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Votre nom"
                  autoComplete="name"
                  aria-label="Votre nom"
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="votre@email.com"
                  autoComplete="email"
                  aria-label="Votre email"
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="Sujet de votre message"
                  aria-label="Sujet de votre message"
                />
                {errors.subject && <p className="error-message">{errors.subject}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={errors.message ? 'error' : ''}
                  placeholder="Votre message..."
                  aria-label="Votre message"
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loading-spinner">
                    <span>Envoi en cours...</span>
                  </div>
                ) : 'Envoyer'}
              </button>
            </form>
          )}
        </div>
        
        <div className="contact-info">
          <h2>Autres moyens de me contacter</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>contact@vignesibrahim.com</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com/in/vignesibrahim" target="_blank" rel="noopener noreferrer">linkedin.com/in/vignesibrahim</a></p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p><a href="https://github.com/vigneshibrahim" target="_blank" rel="noopener noreferrer">github.com/vigneshibrahim</a></p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p>+33 6 XX XX XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

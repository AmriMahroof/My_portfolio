import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profileImage from '../assets/images/IMG_2624.JPG.jpeg';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/94771281983', label: 'WhatsApp' },
    { icon: FiMail, href: 'mailto:amrymahroof@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in">
            <span className="hero-badge">👋 Hello, I'm Amry</span>
            
            <h1 className="hero-title">
              Full Stack Developer
            </h1>
            
            <p className="hero-description">
              Full Stack Developer specializing in modern web technologies. I build production-grade applications that solve real-world problems with clean, efficient code.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href="/AMRY-MAHROOF-CV.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
            
            <div className="hero-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image-container fade-in">
            <div className="hero-image-wrapper">
              <img 
                src={profileImage} 
                alt="Mohamed Amry - Full Stack Developer" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

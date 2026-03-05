import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/94771281983', label: 'WhatsApp' },
    { icon: FiMail, href: 'mailto:amrymahroof@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand fade-in">
            <h3 className="text-gradient">Mohamed Amry</h3>
            <p>
              Full Stack Developer specializing in building scalable, performant, 
              and user-centric web applications with modern technologies.
            </p>
            <div className="footer-social">
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

          {/* Quick Links Section */}
          <div className="footer-links fade-in">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="footer-link-item"
                >
                  <FiArrowRight size={14} />
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-contact fade-in">
            <h4>Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMail size={16} />
                <span>amrymahroof@gmail.com</span>
              </li>
              <li>
                <span>📞</span>
                <span>+94 (77) 128 1983</span>
              </li>
              <li>
                <span>📍</span>
                <span>Hemmathagama, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom fade-in" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.05rem' }}>Copyright © 2025 Mohamed Amry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

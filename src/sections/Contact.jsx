import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:amrymahroof@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'amrymahroof@gmail.com',
      href: 'mailto:amrymahroof@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+94 (77) 128 1983',
      href: 'tel:+94771281983',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Hemmathagama, Srilanka',
      href: 'https://www.google.com/maps/search/?api=1&query=Hemmathagama,+Sri+Lanka',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/94771281983', label: 'WhatsApp' },
    { icon: FiMail, href: 'mailto:amrymahroof@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form fade-in">
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Amry Mahroof"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="amrymahroof@gmail.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry or message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Describe your project or opportunity..."
              />
            </div>

            <button type="submit" className="btn-primary contact-submit">
              <FiSend size={18} />
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="fade-in">
              <div className="contact-info-text">
                <h3>Contact Information</h3>
                <p>
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>
              </div>
            </div>

            <div className="contact-details">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="contact-item fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="contact-icon">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section fade-in">
              <h3>Social Links</h3>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

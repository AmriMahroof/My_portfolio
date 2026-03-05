import { FiTarget, FiZap, FiCode } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: '2+ Years Experience',
      description: 'Building production-grade web applications with modern technologies.',
    },
    {
      icon: FiTarget,
      title: ' Projects Delivered',
      description: 'Successfully completed academic and personal projects that demonstrate hands-on experience and support my professional growth as a developer.',
    },
    {
      icon: FiZap,
      title: 'Full Stack Expert',
      description: 'Specialized in React, Node.js, and databases.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-card fade-in" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-description" style={{ textAlign: 'justify', lineHeight: '1.8', width: '100%', maxWidth: '100%', marginTop: '16px' }}>
            Hello, I am Amry, a results-driven Full Stack Software Engineer with experience designing and developing scalable, responsive web applications across front-end and back-end systems. Skilled in writing clean, maintainable code, managing databases, and delivering efficient, user-focused solutions.
          </p>
          <p className="section-description" style={{ textAlign: 'justify', lineHeight: '1.8', marginTop: '16px', width: '100%', maxWidth: '100%' }}>
            Adept at translating requirements into reliable, high-performance software while maintaining strong standards of security and quality. Committed to professional excellence, collaboration, and continuous improvement in fast-paced development environments.
          </p>
        </div>

        <div className="about-grid">
          {highlights.map((item, index) => (
            <div key={item.title} className="about-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="about-icon">
                <item.icon size={40} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-card fade-in" style={{ marginTop: '40px' }}>
          <h3>My Tech Philosophy</h3>
          <p style={{ marginTop: '16px' }}>
            I believe in writing clean, maintainable code that scales. Every line of code
            should have a purpose, and every component should be designed with reusability
            in mind. I'm constantly learning and staying up-to-date with the latest
            technologies and best practices in web development.
          </p>
          <p style={{ marginTop: '12px' }}>
            My focus is on building applications that not only look great but also perform
            exceptionally well. Performance optimization, accessibility, and SEO are
            integral parts of my development process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

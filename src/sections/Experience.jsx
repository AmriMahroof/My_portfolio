const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Cliick Wave (PVT) Ltd.',
    duration: 'April 2025 – August 2025 (Full Time)',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    achievements: [
      'Engineered full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js) to support scalable, production-grade web applications',
      'Implemented secure authentication systems to protect user data and ensure reliable access control',
      'Collaborated in code reviews to improve code quality, maintainability, and performance across projects',
      'Worked within an Agile development environment, contributing to sprint planning, task execution, and continuous delivery',
      'Delivered responsive frontend components and efficient backend APIs aligned with business and user requirements',
    ],
  },
  {
    role: 'Fullstack Developer Intern',
    company: 'Dot-Tech Software (PVT) Ltd.',
    duration: 'August 2025 – February 2026 (Full Time)',
    techStack: ['React', 'Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    achievements: [
      'Developed full-stack web applications using React, Node.js, Express, GraphQL, PostgreSQL, and MongoDB, delivering responsive and production-ready solutions',
      'Implemented secure JWT based authentication to ensure safe user access and session management',
      'Designed and maintained APIs, optimized database queries, and contributed to scalable, high-performance systems',
      'Participated in code reviews to enforce clean, maintainable, and high-quality code standards',
      'Collaborated with cross-functional teams following Agile methodology, contributing to sprint planning, daily stand-ups, and iterative feature development',
      'Gained hands-on experience in modern web application development, security best practices, and professional software engineering workflows',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            My professional journey building production-grade applications.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${exp.role}`} className="experience-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <div className="experience-tech">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="experience-achievement">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

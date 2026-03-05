import { FiCode, FiServer, FiDatabase, FiLayers, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      'React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Kotlin'
    ],
    color: '#3b82f6',
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      'Node.js', 'Express', 'RESTful API', 'JWT Auth', 'GraphQL', 'C#', 'Java', 'Python', 'PHP', 'C++', 'C'
    ],
    color: '#10b981',
  },
  {
    title: 'Database',
    icon: <FiDatabase />,
    skills: [
      'MongoDB', 'PostgreSQL', 'Firebase', 'Oracle', 'MySQL', 'SQLite'
    ],
    color: '#8b5cf6',
  },
  {
    title: 'Frameworks',
    icon: <FiLayers />,
    skills: [
      '.NET Framework', 'Spring Boot', 'Tailwind CSS', 'Bootstrap', 'Flask', 'Prisma'
    ],
    color: '#ec4899',
  },
  {
    title: 'DevOps & Tools',
    icon: <FiTool />,
    skills: [
      'Git', 'GitHub', 'Jupyter', 'Proteus', 'Linux', 'Blynk', 'Colab', 'Maven', 'Clickup', 'Figma', 'Notion', 'AWS', 'VS Code', 'IntelliJ', 'Postman'
    ],
    color: '#f59e0b',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Skills</h2>
          <p className="section-description">
            Technologies and tools I use to build production-ready applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className="skill-card fade-in" 
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper" style={{ background: `${category.color}20` }}>
                  <span className="skill-icon" style={{ color: category.color }}>
                    {category.icon}
                  </span>
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ 
                      borderColor: category.color,
                      color: category.color,
                      animationDelay: `${(catIndex * 0.1 + skillIndex * 0.03)}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

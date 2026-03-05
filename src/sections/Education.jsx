import { FiCalendar } from 'react-icons/fi';

const education = [
  {
    degree: 'Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    period: '2023 - 2024',
    description: 'Completed a Diploma in Software Engineering with a strong focus on software development, system design, algorithms, data structures, database systems, building a strong foundation in problem-solving and practical application development and modern web technologies.',
    achievements: [
      'Graduated with Distinction (GPA: 3.80)',
      'Relevant coursework: Software Engineering Principles, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Web Application Development',
    ],
  },
  {
    degree: 'Higher Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    period: '2023 - 2024',
    description: 'Completed a Higher Diploma in Software Engineering with advanced study in enterprise application development, modern computing technologies, practical project-based learning focused on real-world software solutions and Innovation & Entrepreneurship Projects.',
    achievements: [
      'Awarded Merit (GPA: 3.30)',
      'Programming & Data Structures, Enterprise Application Development, Data Management, Mobile Application Development, Internet of Things (IoT), Emerging Technologies, Machine Learning, Innovation & Entrepreneurship Projects',
    ],
  },
  {
    degree: 'Diploma in English',
    institution: 'BCAS Campus – British College of Applied Studies, Sri Lanka',
    period: 'Completed in 2022',
    description: 'Successfully completed a Diploma in English with comprehensive training in communication skills, focusing on listening, speaking, reading, and writing to support academic and professional development.',
    achievements: [
      'Awarded Merit for overall academic performance',
      'Core modules: Listening, Speaking, Reading and Writing',
    ],
  },
  {
    degree: 'Introduction to Generative AI Studio',
    institution: 'Google Cloud & Simplilearn',
    period: '2025',
    description: 'Completed a foundational course in Generative AI concepts, Google Cloud\'s Generative AI Studio, and practical use cases of AI in modern applications.',
    achievements: [
      'Learned Generative AI concepts and fundamentals',
      'Explored Google Cloud\'s Generative AI Studio tools and capabilities',
      'Understood practical use cases of AI in modern applications',
    ],
  },
  {
    degree: 'Introduction to Prompt Engineering for Generative AI',
    institution: 'LinkedIn Learning',
    period: '2025',
    description: 'Completed a comprehensive introduction to the fundamentals of prompt engineering, focusing on designing effective prompts to optimize interactions with Generative AI models such as large language models (LLMs) and image generation systems.',
    achievements: [
      'Learned principles of AI prompting and structured communication with generative systems',
      'Mastered techniques for crafting precise, context-aware, and outcome-driven prompts',
      'Understood the relationship between prompt engineering and core AI concepts such as model reasoning, creativity, and adaptability',
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Academic background and continuous learning journey in software development.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div 
              key={edu.degree} 
              className="education-card fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="education-period">
                <FiCalendar size={16} />
                <span>{edu.period}</span>
              </div>
              
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              
              <p className="education-description">{edu.description}</p>
              
              <div className="education-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

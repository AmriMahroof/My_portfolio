import { FiExternalLink, FiGithub, FiFolder, FiMonitor, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    title: 'AI-based Inventory Management System',
    description: 'An intelligent inventory management system with AI-powered sales forecasting, stock optimization, and AR-based product scanning for enhanced customer experience.',
    problem: 'Traditional inventory systems lack predictive analytics, leading to stock shortages, overstocking, and inefficient supply chain management.',
    solution: 'Developed an AI-powered system using machine learning for sales forecasting and stock optimization, with separate Owner and Customer portals. Integrated AR technology for product scanning and real-time inventory analytics.',
    techStack: ['React.js', 'Python', 'Flask', 'Scikit-learn', 'Firebase', 'HTML/CSS', 'JavaScript'],
    features: [
      'AI-powered sales & stock forecasting',
      'Real-time inventory analytics & low stock alerts',
      'AR-based product scanning for customers',
      'Comprehensive owner dashboard with reports',
      'Supplier management & automated ordering',
      'Customer portal with product browsing',
    ],
    github: 'https://github.com/AmriMahroof/AI_inventory_management_system.git',
    live: null,
    demo: '/videos/inventory-new-demo.mp4',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
  },
  {
    title: 'Multi Disease Prediction System Using Machine Learning',
    description: 'A comprehensive ML-powered healthcare platform that predicts multiple diseases including Chronic Kidney Disease, Stroke, Diabetes, and Heart Disease from a unified web interface.',
    problem: 'Early disease detection is crucial for effective treatment, but traditional diagnostic methods can be time-consuming and expensive, limiting accessibility to preventive healthcare.',
    solution: 'Developed a Python-based machine learning system using supervised learning algorithms (Logistic Regression, Decision Tree, Random Forest, SVM, KNN) trained on high-quality medical datasets. Built a Flask web application with a dynamic dashboard that adjusts inputs based on selected disease, providing instant predictions from patient medical records.',
    techStack: ['Python', 'Flask', 'Scikit-learn', 'Joblib', 'HTML/CSS', 'Machine Learning'],
    features: [
      'Predicts 4 major diseases from single dashboard',
      'Trained with Kaggle & UCI ML Repository datasets',
      'Multiple ML algorithms (Logistic Regression, Decision Tree, Random Forest, SVM, KNN)',
      'Dynamic input forms based on disease selection',
      'Real-time predictions from medical records',
      'Models saved in .pkl format using joblib',
    ],
    github: 'https://github.com/AmriMahroof/Machine-Learning.git',
    live: null,
    demo: '/videos/ml-demo.mp4',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    title: 'News Reporting Mobile Application',
    description: 'A comprehensive Android news reporting application with role-based access control, enabling seamless collaboration between admins, reporters, and users for efficient digital journalism.',
    problem: 'Traditional news reporting systems lack efficient workflows for content management, approval processes, and real-time collaboration between reporters, admins, and readers.',
    solution: 'Developed a mobile application using Kotlin and Java in Android Studio with Firebase for real-time data storage and authentication. Implemented role-based access with distinct functionalities for admins (content management, reporter oversight), reporters (news creation and submission), and users (browsing categorized news). Features drag-and-drop interface methods in Kotlin for enhanced interactivity.',
    techStack: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'XML'],
    features: [
      'Role-based access: Admin, Reporter, and User roles',
      'Admin: Manage reporters, approve/reject/draft news, send feedback',
      'Reporter: Create, edit, submit news with status tracking',
      'Users: Browse news across multiple categories (sports, politics, business, world)',
      'Real-time updates via Firebase',
      'Drag-and-drop UI elements for interactive experience',
    ],
    github: 'https://github.com/AmriMahroof/MAD_Reporter_app.git',
    live: null,
    demo: '/videos/news-reporting-demo.mp4',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop',
  },
  {
    title: 'Library Management System – RESTful API with Spring Boot',
    description: 'A comprehensive full-stack Library Management System featuring robust RESTful APIs built with Java Spring Boot for efficient management of books, members, and memberships.',
    problem: 'Traditional library systems rely on manual processes for managing books, members, and memberships, leading to inefficiencies, data inconsistencies, and time-consuming operations.',
    solution: 'Developed a scalable RESTful API using Java Spring Boot (Spring Web, Spring Data JPA, Spring Boot DevTools) with MySQL database via PhpMyAdmin. Implemented complete CRUD operations for Books, Members, and Memberships. Built a user-friendly frontend interface using HTML, CSS, and JavaScript for seamless interaction with the API. Used Postman for thorough API testing during development.',
    techStack: ['Java', 'Spring Boot', 'Spring Web', 'Spring Data JPA', 'MySQL', 'PhpMyAdmin', 'HTML/CSS', 'JavaScript'],
    features: [
      'RESTful API for library resource management',
      'CRUD operations for Books, Members, and Memberships',
      'Persistent data storage with MySQL and PhpMyAdmin',
      'Integrated frontend with HTML, CSS, and JavaScript',
      'Postman API testing for reliability',
      'MVC architecture implementation',
    ],
    github: 'https://github.com/AmriMahroof/EAD-2_LMS-.git',
    live: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
  },
  {
    title: 'Inventory Management System',
    description: 'A robust desktop-based Inventory Management System tailored for supermarkets, using Java Swing for GUI, Java for backend logic, and MySQL as the database to enhance operational efficiency.',
    problem: 'Supermarkets and retail stores face challenges in managing users, inventory, customer orders, and generating billing reports efficiently using manual or fragmented systems.',
    solution: 'Developed a comprehensive desktop application using Java Swing for the graphical user interface and Java for backend logic, with MySQL database for persistent storage. Implemented role-based access control with separate functionalities for Admin (full system access, user management, category/product maintenance, customer records, order tracking, billing reports) and Employees (category, product, customer, and order management). Features include user management with add/update/reset capabilities, product management with name/quantity/price/description/category, customer record maintenance, order processing with cart functionality, and PDF invoice generation for billing.',
    techStack: ['Java Swing', 'Java', 'MySQL', 'JDBC', 'PDF Generation'],
    features: [
      'Role-based access: Admin and Employee roles',
      'Admin: Full access to user management, categories, products, customers, orders',
      'Employee: Manage categories, products, customers, and orders within permissions',
      'Product management with quantity, price, description, and category',
      'Customer record maintenance (name, contact, email)',
      'Order processing with cart and PDF invoice generation',
    ],
    github: 'https://github.com/AmriMahroof/Inventory-management-system.git',
    live: null,
    demo: '/videos/inventory-desktop-demo.mp4',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
  },
  {
    title: 'Vehicle Rental Management Web Application',
    description: 'A comprehensive web application for Nagasaki Tours & Rent a Car that streamlines vehicle rental operations including bookings, returns, rules, fines, and customer interactions.',
    problem: 'Vehicle rental businesses face challenges in managing multiple vehicles, bookings, customer interactions, rental transactions, and generating bills efficiently using manual processes.',
    solution: 'Developed a full-stack web application using HTML, CSS, Bootstrap, and JavaScript for a dynamic responsive frontend, with PHP handling backend logic. Utilized MySQL database via phpMyAdmin for flexible and scalable data storage. Implemented separate portals for Admin (vehicle management, user management, rental transactions, tracking returns, rules and fines, booking cancellations, PDF bill generation) and Users (vehicle booking, cancellation, viewing rental details, return details, rules and fines, cancellation history).',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'phpMyAdmin'],
    features: [
      'Admin: Manage vehicles, users, rental transactions, and track returns',
      'Admin: Set and manage rules and fines',
      'Admin: Handle booking cancellations and generate/print/download PDF bills',
      'User: Book vehicles and cancel bookings',
      'User: View rental details, return details, and applicable rules/fines',
      'User: Access cancellation history',
    ],
    github: 'https://github.com/AmriMahroof/vehicle-rental-management-system.git',
    live: null,
    demo: '/videos/vehicle-rental-demo.mp4',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
  },
  {
    title: 'Library Management System using Java (Linked List)',
    description: 'A desktop-based Library Management System developed using Java with Linked List algorithm for efficient data management. Features role-based access for users and administrators with comprehensive library operations.',
    problem: 'Libraries need efficient systems to manage books, students, and feedback while maintaining security and privacy policies. Manual processes lead to inefficient tracking of books, members, and feedback.',
    solution: 'Developed a Java-based desktop application using Linked List data structure for efficient data storage and retrieval. Implemented role-based access control with separate interfaces for Users and Admins. Users can login, view library information, access their profile, browse book details, give feedback, and search for books. Admins have a comprehensive dashboard with five sections: Feedback management, Student management, Library management, Dashboard overview, and Logout. Admin capabilities include adding/deleting/viewing students, viewing feedback, and full CRUD operations for books (add, delete, update, view). Student registration is restricted to admins only for privacy.',
    techStack: ['Java', 'Linked List', 'Swing GUI', 'JDBC', 'MySQL'],
    features: [
      'Role-based access: User and Admin roles',
      'User: Login, view library about, access profile, browse book details',
      'User: Give feedback and search for books',
      'Admin: Dashboard with 5 sections (Feedback, Student, Library, Dashboard, Logout)',
      'Admin: Add, delete, and view student records',
      'Admin: Add, delete, update, and view books',
    ],
    github: 'https://github.com/AmriMahroof/PDSA-Library-management-system.git',
    live: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
  },
  {
    title: 'Library Management System using C# .NET',
    description: 'A desktop-based Library Management System built with C# .NET Framework for backend logic and Windows Forms for the user interface, utilizing MySQL database for efficient data storage and management.',
    problem: 'Libraries require efficient digital systems to manage books, members, lending operations, and fines. Manual tracking of book availability, lending, returns, and member management is error-prone and time-consuming.',
    solution: 'Developed a comprehensive Windows desktop application using C# .NET Framework for robust backend logic and Windows Forms for an intuitive graphical user interface. Integrated MySQL database via phpMyAdmin for reliable data storage. Implemented full CRUD operations for managing books and members, member registration, book lending with return tracking, and real-time availability status. Features user accounts with profile management, book borrowing capabilities, and fine management system. Librarians have dedicated tools to manage books, track fines, and maintain student/member details.',
    techStack: ['C#', '.NET Framework', 'Windows Forms', 'MySQL', 'phpMyAdmin'],
    features: [
      'Full CRUD operations for books and members',
      'Member registration and user account management',
      'Book lending and return tracking',
      'Real-time book availability status',
      'User profiles with update capabilities',
      'Fine management system for librarians',
    ],
    github: 'https://github.com/AmriMahroof/GUI_library_management_system.git',
    live: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop',
  },
  {
    title: 'IoT-based Advance Healthcare Management System',
    description: 'An innovative IoT-based device for monitoring patient health data using advanced sensors. The system features emergency alerts, SMS notifications, and cloud/SD storage for comprehensive health readings.',
    problem: 'Traditional healthcare monitoring requires manual checkups and does not provide real-time health data or immediate emergency responses, especially for patients who need continuous monitoring.',
    solution: 'Developed a comprehensive IoT-based healthcare monitoring system using Arduino microcontroller integrated with various health sensors. The system collects real-time patient health data and transmits it to Firebase Cloud for remote monitoring. Implemented emergency alert functionality that triggers SMS notifications via SIM800L module to alert family members or medical staff instantly. Features SD card storage for local backup of all health readings, ensuring data availability even without internet connectivity. The ESP8266 module enables wireless connectivity for seamless data transmission.',
    techStack: ['Arduino', 'IoT Sensors', 'ESP8266', 'C Programming', 'Firebase Cloud', 'SIM800L', 'SD Card Module'],
    features: [
      'Real-time patient health monitoring using sensors',
      'Emergency alerts for critical health conditions',
      'SMS notifications via SIM800L module',
      'Cloud storage using Firebase',
      'Local SD card storage for readings backup',
      'Wireless connectivity with ESP8266',
    ],
    github: 'https://github.com/AmriMahroof/IOT---Advance-healthcare-system.git',
    live: null,
    demo: '/videos/iot-healthcare-demo.mp4',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    title: 'Liquid Level Detection System',
    description: 'An automated Liquid Level Detection System designed to monitor and manage liquid levels in containers on a movable conveyor belt, reducing manual intervention and enhancing automation using IoT and embedded systems.',
    problem: 'Industrial liquid container management requires constant manual monitoring to track fill levels, leading to inefficiencies, increased labor costs, and potential errors in quality control.',
    solution: 'Developed a comprehensive automated system using Arduino Uno as the main microcontroller. Liquid level sensors detect fill status and send real-time data to Arduino for processing. The system uses Arduino IDE with C++ programming for continuous real-time tracking. A conveyor system driven by a 12V DC motor moves bottles between inspection stations, with an IR proximity switch detecting object presence and a capacitive proximity sensor identifying both metallic and non-metallic containers. The system processes sensor inputs to execute necessary actions like stopping the belt or activating a robotic arm for picking and placing containers.',
    techStack: ['Arduino IDE', 'C++', 'Embedded Systems', 'IoT', 'Sensor Technology', 'Robotics'],
    features: [
      'Liquid level sensors for real-time fill status detection',
      'Real-time monitoring with Arduino IDE and IoT connectivity',
      'Automated conveyor system with DC motor control',
      'Microcontroller-based processing of sensor inputs',
      'IR proximity switch for object detection',
      'Capacitive sensor for metallic and non-metallic containers',
      'Robotic arm for container picking and placing',
    ],
    github: 'https://github.com/AmriMahroof/Robotics---Liquid-level-detector.git',
    live: null,
    demo: '/videos/liquid-detection-demo.mp4',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Production-ready applications that demonstrate technical depth and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div key={project.title} className="project-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay" />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-group">
                    <FiFolder className="project-icon" />
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Code">
                      <FiGithub size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View Live">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link" 
                        aria-label="View Demo"
                      >
                        <FiMonitor size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-problem-solution">
                  <div className="project-problem">
                    <span>Problem:</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-solution">
                    <span>Solution:</span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-tech-item">{tech}</span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="project-feature">{feature}</li>
                  ))}
                </ul>

                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    <FiMonitor size={18} />
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-view-all">
          {!showAll ? (
            <button onClick={() => setShowAll(true)} className="btn-primary">
              View All Projects <FiArrowRight />
            </button>
          ) : (
            <button onClick={() => setShowAll(false)} className="btn-primary">
              Show Less <FiArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

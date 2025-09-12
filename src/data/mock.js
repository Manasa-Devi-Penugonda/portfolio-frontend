export const mockData = {
  hero: {
    name: "Manasa Devi Penugonda",
    title: "Full Stack Developer",
    subtitle: "AWS Integration Specialist & Module Lead",
    description: "Transforming complex requirements into scalable solutions with 2.7+ years of expertise in React.js, Node.js, and AWS cloud integrations.",
    location: "India",
    image : "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg"
    // availability: "Open to opportunities"
  },
  
  about: {
    title: "About Me",
    description: "I'm a dedicated Full Stack Developer with a passion for creating efficient, scalable web applications. My journey began with a Bachelor's in Science (MPC), and I've since specialized in modern web technologies and cloud integrations.",
    highlights: [
      "2.7+ years of professional development experience",
      "INSPIRE Scholarship recipient from Government of India",
      "Skilled in code reviews and technical mentorship",
      "Currently working as a Module Lead at Unifo Pvt Ltd",
      "Expertise in AWS Lambda, S3, SES, API Gateway, and EventBridge"
    ],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Hapi.js", "RESTful APIs", "Python", "Express.js"]
      },
      {
        name: "Database",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design"]
      },
      {
        name: "Cloud & DevOps",
        skills: ["AWS Lambda", "AWS S3", "AWS SES", "API Gateway", "EventBridge", "CloudWatch"]
      },
      {
        name: "Tools & Others",
        skills: ["Git", "GitHub", "Heroku", "Netlify", "Railway", "Data Structures & Algorithms"]
      }
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "Unifo Pvt Ltd",
      position: "Full Stack Developer & Module Lead",
      duration: "January 2023 - Present",
      location: "Remote",
      description: "Leading development initiatives and architecting scalable solutions with focus on AWS integrations and system optimizations.",
      achievements: [
        "Designed and implemented system integrations between company applications and customer applications using AWS Lambda, S3, SES, API Gateway, EventBridge, and CloudWatch",
        "Developed SFTP-based integration system where customers upload XML files triggering automated AWS Lambda processing workflows",
        "Built email-driven workflow using AWS SES for automated job creation and email response systems",
        "Implemented IMAP email integration for automated mailbox processing and content-based actions",
        "Created large PDF upload solution using pre-signed S3 URLs with automated processing via S3 event notifications",
        "Developed comprehensive frontend UI for monitoring logs with dynamic filtering and CloudWatch Insights integration",
        "Implemented WhatsApp messaging integration via Cloud API"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Online Judge",
      description: "A web-based code compilation platform supporting multiple programming languages with real-time execution and syntax highlighting.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      githubUrl: "https://github.com/Manasa-Devi-Penugonda/online-compiler",
      liveUrl: "https://manasa-devi-penugonda.github.io/online-compiler/",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Multi-language support (Python, JavaScript, Java, C++)",
        "Real-time code execution",
        "Syntax highlighting and error detection",
        "Responsive design for all devices"
      ]
    },
    {
      id: 2,
      title: "AWS Integration Dashboard",
      description: "Comprehensive monitoring dashboard for AWS services with real-time log analysis and event tracking capabilities.",
      technologies: ["React.js", "Node.js", "AWS SDK", "CloudWatch", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Real-time AWS service monitoring",
        "CloudWatch Insights integration",
        "Dynamic query generation",
        "Advanced filtering and search"
      ]
    },
    {
      id: 3,
      title: "Email Processing System",
      description: "Automated email processing system using AWS SES and Lambda for intelligent email handling and response generation.",
      technologies: ["AWS Lambda", "AWS SES", "Node.js", "IMAP", "EventBridge"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Automated email processing",
        "Smart content analysis",
        "Automated response generation",
        "IMAP integration for mailbox access"
      ]
    }
  ],
  
  contact: {
    title: "Let's Work Together",
    description: "I'm always interested in discussing new opportunities and innovative projects. Let's connect!",
    email: "manasadevipenugonda18@gmail.com",
    phone: "8106547346",
    linkedin: "https://www.linkedin.com/in/manasa-devi-penugonda-b734b9236/",
    github: "https://github.com/Manasa-Devi-Penugonda",
    location: "India",
    availability: "Available for new opportunities"
  }
};
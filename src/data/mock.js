export const mockData = {
  hero: {
    name: "Manasa Devi Penugonda",
    title: "Cloud Engineer | AWS Certified Developer – Associate",
    subtitle: "Generative AI | Serverless Architecture | Full-Stack Development",
    description: "3+ years of experience building scalable cloud-native applications with AWS Bedrock, Amazon Lex, Lambda, API Gateway, DynamoDB, and S3. Passionate about Generative AI, serverless architectures, and delivering high-performance enterprise solutions.",
    location: "India",
    image: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg"
  },

  about: {
    title: "About Me",
    description: "I'm a Cloud Engineer and AWS Certified Developer with 3+ years of experience in Cloud Engineering, Generative AI solutions, Serverless Architectures, Full-Stack Development, and Microservices. I specialize in designing and deploying scalable cloud-native applications, building intelligent AI-powered workflows, and delivering enterprise-grade solutions with a focus on scalability, reliability, and user experience.",
    highlights: [
      "3+ years of professional experience in Cloud Engineering & Full-Stack Development",
      "AWS Certified Developer – Associate",
      "INSPIRE Scholarship recipient from the Department of Science and Technology, Government of India",
      "Generative AI certifications from Skill Nation and Outskill",
      "Expertise in AWS Bedrock, Amazon Lex, Lambda, API Gateway, DynamoDB, and S3",
      "Experience leading development teams and conducting code reviews as Module Lead"
    ],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Cloud & AI",
        skills: ["AWS Bedrock", "Amazon Lex", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "EventBridge", "IAM"]
      },
      {
        name: "Frontend",
        skills: ["React.js", "Redux", "HTML5", "CSS3", "JavaScript (ES6+)"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "Microservices", "Python"]
      },
      {
        name: "Database",
        skills: ["DynamoDB", "MongoDB", "MySQL", "SQL", "NoSQL"]
      },
      {
        name: "DevOps & Tools",
        skills: ["Docker", "Git", "GitHub", "CI/CD", "Postman"]
      }
    ]
  },

  experience: [
    {
      id: 1,
      company: "Yottabrain",
      position: "Cloud Engineer",
      duration: "January 2026 – Present",
      location: "Remote",
      description: "Designing and developing enterprise-grade conversational AI solutions and scalable serverless applications using AWS cloud services and Generative AI technologies.",
      achievements: [
        "Designed and developed enterprise-grade conversational AI solutions using Amazon Lex and AWS Bedrock",
        "Built intelligent chatbot workflows powered by Large Language Models (LLMs) for customer engagement and automation",
        "Developed scalable serverless applications using AWS Lambda, API Gateway, DynamoDB, and Amazon S3",
        "Implemented secure REST APIs and cloud integrations for business-critical applications",
        "Designed optimized DynamoDB data models for efficient and low-latency data access",
        "Leveraged Amazon S3 for document storage, chatbot knowledge management, and application data processing",
        "Collaborated with cross-functional teams to deliver reliable cloud-native solutions following AWS best practices"
      ],
      technologies: ["AWS Bedrock", "Amazon Lex", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Node.js", "LLMs"]
    },
    {
      id: 2,
      company: "Unifo Private Limited",
      position: "Software Development Engineer (SDE-2), Module Lead",
      duration: "April 2025 – January 2026",
      location: "Chennai",
      description: "Led a development team, conducted code reviews, and built scalable web applications and serverless APIs with a focus on AWS services and event-driven architectures.",
      achievements: [
        "Led a development team and conducted code reviews while enforcing engineering best practices",
        "Built scalable web applications using React.js, Node.js, and AWS services",
        "Developed serverless APIs using AWS Lambda and API Gateway with high availability",
        "Automated email and SFTP workflows using AWS services and event-driven architectures",
        "Optimized application performance and improved overall system reliability"
      ],
      technologies: ["React.js", "Node.js", "AWS Lambda", "API Gateway", "EventBridge", "CloudWatch", "SFTP"]
    },
    {
      id: 3,
      company: "Unifo Private Limited",
      position: "Software Development Engineer (SDE-1)",
      duration: "January 2023 – March 2025",
      location: "Chennai",
      description: "Developed full-stack solutions, built email automation systems, and collaborated in Agile teams to deliver high-quality software.",
      achievements: [
        "Developed frontend and backend solutions using React.js, Redux, Node.js, Express.js, MongoDB, and MySQL",
        "Built email automation systems using IMAP and SMTP integrations",
        "Processed large datasets and developed scalable backend services",
        "Collaborated in Agile teams to deliver high-quality software solutions"
      ],
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "MySQL", "IMAP", "SMTP"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Online Code Judge Platform",
      description: "A coding assessment platform supporting multiple programming languages with an interactive React.js interface and real-time code execution capabilities.",
      technologies: ["React.js", "Node.js", "JavaScript", "API Integration"],
      githubUrl: "https://github.com/Manasa-Devi-Penugonda/online-compiler",
      liveUrl: "https://manasa-devi-penugonda.github.io/online-compiler/",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Multi-language support (Python, JavaScript, Java, C++)",
        "Real-time code execution",
        "Scalable backend capable of processing large input workloads",
        "Responsive design for all devices"
      ]
    },
    {
      id: 2,
      title: "Conversational AI Chatbot",
      description: "Enterprise-grade conversational AI solution built with Amazon Lex and AWS Bedrock, powered by LLMs for intelligent customer engagement and automation.",
      technologies: ["Amazon Lex", "AWS Bedrock", "AWS Lambda", "DynamoDB", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "LLM-powered intelligent chatbot workflows",
        "Seamless Amazon Lex and AWS Bedrock integration",
        "DynamoDB-backed low-latency data access",
        "S3-based knowledge management for chatbot context"
      ]
    },
    {
      id: 3,
      title: "Serverless Integration Platform",
      description: "Scalable serverless platform automating email and SFTP workflows using AWS Lambda, API Gateway, EventBridge, and CloudWatch for enterprise business processes.",
      technologies: ["AWS Lambda", "API Gateway", "EventBridge", "CloudWatch", "Node.js", "IMAP"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Automated SFTP-triggered Lambda processing workflows",
        "Email-driven job creation via AWS SES and IMAP",
        "Real-time log monitoring with CloudWatch Insights",
        "Pre-signed S3 URL solution for large file uploads"
      ]
    }
  ],

  contact: {
    title: "Let's Work Together",
    description: "I'm always open to discussing new opportunities, cloud projects, and innovative AI solutions. Let's connect!",
    email: "manasadevipenugonda18@gmail.com",
    phone: "+91-8106547346",
    linkedin: "https://www.linkedin.com/in/manasa-devi-penugonda-b734b9236/",
    github: "https://github.com/Manasa-Devi-Penugonda",
    location: "India",
    availability: "Available for new opportunities"
  }
};
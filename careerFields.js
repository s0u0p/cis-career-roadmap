
const careerFields = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    description:
      "Protect systems, networks, and data from digital attacks. Roles include penetration tester, security analyst, incident responder, and security engineer.",
    skills: ["Network security", "Ethical hacking", "Risk assessment", "Cryptography", "Compliance"],
    exampleRoles: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Security Engineer", "CISO"],
    certifications: ["CompTIA Security+", "CEH", "CISSP", "OSCP"],
  },
  {
    id: "data_science",
    label: "Data Science & Analytics",
    description:
      "Extract insights from large datasets using statistics, machine learning, and visualization. Roles span data analyst, data scientist, and ML engineer.",
    skills: ["Python/R", "Machine learning", "Statistical analysis", "Data visualization", "SQL"],
    exampleRoles: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Intelligence Analyst"],
    certifications: ["Google Data Analytics", "AWS Certified ML", "Tableau Specialist"],
  },
  {
    id: "software_engineering",
    label: "Software Engineering",
    description:
      "Design, build, and maintain software applications. Involves writing clean code, system architecture, and working in agile teams.",
    skills: ["Obect-Oriented Programming", "Algorithms & data structures", "Version control", "Testing", "System design"],
    exampleRoles: ["Software Engineer", "Backend Developer", "Full Stack Developer", "Mobile Developer"],
    certifications: ["AWS Developer", "Oracle Java SE", "Google Associate Android Developer"],
  },
  {
    id: "web_development",
    label: "Web Development",
    description:
      "Build and maintain websites and web applications. Covers front-end (UI/UX), back-end (servers/databases), and full-stack development.",
    skills: ["HTML/CSS/JS", "React/Vue/Angular", "Node.js", "REST APIs", "Responsive design"],
    exampleRoles: ["Front-End Developer", "Back-End Developer", "Full Stack Developer", "UI Engineer"],
    certifications: ["Meta Front-End Developer", "freeCodeCamp", "AWS Cloud Practitioner"],
  },
  {
    id: "cloud_computing",
    label: "Cloud Computing & DevOps",
    description:
      "Deploy, manage, and scale applications using cloud platforms like AWS, Azure, and GCP. Includes DevOps practices like CI/CD and infrastructure as code.",
    skills: ["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD pipelines", "Linux", "Terraform"],
    exampleRoles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer", "Cloud Architect"],
    certifications: ["AWS Solutions Architect", "Azure Administrator", "Google Cloud Engineer"],
  },
  {
    id: "networking",
    label: "Networking & Systems Administration",
    description:
      "Design, implement, and manage computer networks and IT infrastructure. Keeps organizational systems running reliably and securely.",
    skills: ["TCP/IP", "Routing & switching", "Firewalls", "VPN", "Network monitoring", "Network Traffic Management"],
    exampleRoles: ["Network Engineer", "Systems Administrator", "Network Architect", "IT Infrastructure Analyst"],
    certifications: ["CompTIA Network+", "Cisco CCNA", "Juniper JNCIA"],
  },
  {
    id: "database_admin",
    label: "Database Administration & Engineering",
    description:
      "Design, optimize, and manage databases that store and serve organizational data. Roles involve both relational and NoSQL systems.",
    skills: ["SQL", "Query optimization", "Database design", "Backup & recovery", "NoSQL (MongoDB, Redis)"],
    exampleRoles: ["Database Administrator", "Database Engineer", "Data Engineer", "Analytics Engineer"],
    certifications: ["Oracle DBA", "Microsoft SQL Server", "MongoDB Associate"],
  },
  {
    id: "it_project_management",
    label: "IT Project Management",
    description:
      "Plan, execute, and close technology projects while managing scope, timelines, and teams. Bridges the gap between technical teams and business stakeholders.",
    skills: ["Agile/Scrum", "Risk management", "Budgeting", "Stakeholder communication", "PMBOK"],
    exampleRoles: ["IT Project Manager", "Scrum Master", "Program Manager", "Product Owner"],
    certifications: ["PMP", "CSM (Scrum Master)", "PMI-ACP", "CAPM"],
  },
  {
    id: "ux_ui_design",
    label: "UX/UI Design & Human-Computer Interaction",
    description:
      "Create intuitive, accessible, and visually compelling digital experiences. Involves user research, wireframing, prototyping, and usability testing.",
    skills: ["Figma/Sketch", "User research", "Wireframing", "Accessibility", "Prototyping"],
    exampleRoles: ["UX Designer", "UI Designer", "Product Designer", "UX Researcher"],
    certifications: ["Google UX Design Certificate", "Nielsen Norman UX", "Interaction Design Foundation"],
  },
  {
    id: "ai_ml",
    label: "Artificial Intelligence & Machine Learning",
    description:
      "Build systems that can learn, reason, and make decisions. Covers deep learning, NLP, computer vision, and AI model deployment.",
    skills: ["Python", "TensorFlow/PyTorch", "Linear algebra", "NLP", "Model evaluation"],
    exampleRoles: ["AI Engineer", "ML Engineer", "Research Scientist", "NLP Engineer", "Computer Vision Engineer"],
    certifications: ["DeepLearning.AI TensorFlow", "AWS ML Specialty", "Google ML Engineer"],
  },
  {
    id: "it_support",
    label: "IT Support & Help Desk",
    description:
      "Provide technical assistance to end users and maintain day-to-day IT operations. A common entry point into many IT career paths.",
    skills: ["Troubleshooting", "OS administration (Windows/macOS/Linux)", "Active Directory", "Ticketing systems", "Customer service"],
    exampleRoles: ["Help Desk Technician", "IT Support Specialist", "Desktop Support Analyst", "IT Technician"],
    certifications: ["CompTIA A+", "Google IT Support", "ITIL Foundation"],
  },
  {
    id: "information_systems",
    label: "Information Systems & Business Analysis",
    description:
      "Align technology with business goals. Involves analyzing business needs, designing information systems, and acting as a bridge between IT and business units.",
    skills: ["Business analysis", "ERP systems", "Process modeling", "Requirements gathering", "SQL"],
    exampleRoles: ["Business Systems Analyst", "IT Business Analyst", "ERP Consultant", "Systems Analyst"],
    certifications: ["CBAP", "PMI-PBA", "SAP Certified"],
  },
];

module.exports = careerFields;

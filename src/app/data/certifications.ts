type CertEntry = {
  name: string;
  description: string;
  url: string;
  duration: string;
  level: "Entry" | "Associate" | "Intermediate" | "Professional" | "Specialty";
};

const certifications: Record<string, CertEntry[]> = {
  cybersecurity: [
    {
      name: "CompTIA Security+",
      description: "Foundational cybersecurity skills for any IT role",
      url: "https://www.comptia.org/certifications/security",
      duration: "3–6 months",
      level: "Entry",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      description: "Penetration testing and ethical hacking techniques",
      url: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
      duration: "4–6 months",
      level: "Intermediate",
    },
    {
      name: "CISSP",
      description: "Advanced security management and architecture",
      url: "https://www.isc2.org/certifications/cissp",
      duration: "6–12 months",
      level: "Professional",
    },
  ],
  data_science: [
    {
      name: "Google Data Analytics",
      description: "Learn data analytics fundamentals and tools",
      url: "https://www.coursera.org/professional-certificates/google-data-analytics",
      duration: "3–6 months",
      level: "Entry",
    },
    {
      name: "AWS Certified ML – Specialty",
      description: "Build and deploy ML solutions on AWS",
      url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      duration: "4–8 months",
      level: "Specialty",
    },
    {
      name: "Tableau Desktop Specialist",
      description: "Data visualization and business intelligence",
      url: "https://www.tableau.com/learn/certification/desktop-specialist",
      duration: "2–4 months",
      level: "Entry",
    },
  ],
  software_engineering: [
    {
      name: "AWS Certified Developer",
      description: "Develop and deploy cloud-native applications on AWS",
      url: "https://aws.amazon.com/certification/certified-developer-associate/",
      duration: "3–6 months",
      level: "Associate",
    },
    {
      name: "Oracle Java SE Developer",
      description: "Demonstrate proficiency in core Java programming",
      url: "https://education.oracle.com/oracle-certified-professional-java-se-17-developer/trackp_OCPJSE17",
      duration: "3–5 months",
      level: "Professional",
    },
    {
      name: "Google Associate Android Developer",
      description: "Build Android apps using industry best practices",
      url: "https://developers.google.com/certification/associate-android-developer",
      duration: "2–4 months",
      level: "Associate",
    },
  ],
  web_development: [
    {
      name: "Meta Front-End Developer",
      description: "React, HTML/CSS, and UI design from Meta",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      duration: "7 months",
      level: "Entry",
    },
    {
      name: "freeCodeCamp Full Stack",
      description: "Free, self-paced full-stack web development",
      url: "https://www.freecodecamp.org/learn",
      duration: "6–12 months",
      level: "Entry",
    },
    {
      name: "AWS Cloud Practitioner",
      description: "Cloud fundamentals for web deployment",
      url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      duration: "1–3 months",
      level: "Entry",
    },
  ],
  cloud_computing: [
    {
      name: "AWS Solutions Architect",
      description: "Design scalable, resilient cloud architectures",
      url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      duration: "3–6 months",
      level: "Associate",
    },
    {
      name: "Azure Administrator",
      description: "Manage Microsoft Azure services and infrastructure",
      url: "https://learn.microsoft.com/en-us/certifications/azure-administrator/",
      duration: "3–6 months",
      level: "Associate",
    },
    {
      name: "Google Cloud Engineer",
      description: "Deploy and manage Google Cloud solutions",
      url: "https://cloud.google.com/learn/certification/cloud-engineer",
      duration: "3–6 months",
      level: "Associate",
    },
  ],
  networking: [
    {
      name: "CompTIA Network+",
      description: "Core networking concepts and troubleshooting",
      url: "https://www.comptia.org/certifications/network",
      duration: "2–4 months",
      level: "Entry",
    },
    {
      name: "Cisco CCNA",
      description: "Routing, switching, and enterprise networking",
      url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      duration: "3–6 months",
      level: "Associate",
    },
    {
      name: "Juniper JNCIA-Junos",
      description: "Junos OS fundamentals for network engineers",
      url: "https://www.juniper.net/us/en/training/certification/tracks/junos/jncia-junos.html",
      duration: "2–3 months",
      level: "Associate",
    },
  ],
  database_admin: [
    {
      name: "Oracle Database Administrator",
      description: "Design and manage Oracle database systems",
      url: "https://education.oracle.com/oracle-database-administrator/trackp_248",
      duration: "4–6 months",
      level: "Professional",
    },
    {
      name: "Microsoft Azure Database Admin",
      description: "Administer SQL-based databases on Azure",
      url: "https://learn.microsoft.com/en-us/certifications/azure-database-administrator-associate/",
      duration: "3–5 months",
      level: "Associate",
    },
    {
      name: "MongoDB Associate Developer",
      description: "Build applications using MongoDB",
      url: "https://learn.mongodb.com/pages/mongodb-associate-developer-exam",
      duration: "2–4 months",
      level: "Associate",
    },
  ],
  it_project_management: [
    {
      name: "PMP",
      description: "Gold standard in project management globally",
      url: "https://www.pmi.org/certifications/project-management-pmp",
      duration: "6–12 months",
      level: "Professional",
    },
    {
      name: "Certified ScrumMaster (CSM)",
      description: "Lead Agile teams using the Scrum framework",
      url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
      duration: "1–2 months",
      level: "Entry",
    },
    {
      name: "CAPM",
      description: "Entry-level project management from PMI",
      url: "https://www.pmi.org/certifications/certified-associate-capm",
      duration: "3–6 months",
      level: "Entry",
    },
  ],
  ux_ui_design: [
    {
      name: "Google UX Design Certificate",
      description: "End-to-end UX design process from Google",
      url: "https://www.coursera.org/professional-certificates/google-ux-design",
      duration: "6 months",
      level: "Entry",
    },
    {
      name: "Nielsen Norman UX Certification",
      description: "Industry-recognized UX research and design",
      url: "https://www.nngroup.com/ux-certification/",
      duration: "Variable",
      level: "Professional",
    },
    {
      name: "Interaction Design Foundation",
      description: "Affordable, self-paced UX courses and certification",
      url: "https://www.interaction-design.org/courses",
      duration: "3–6 months",
      level: "Entry",
    },
  ],
  ai_ml: [
    {
      name: "DeepLearning.AI TensorFlow",
      description: "Build neural networks and ML models with TensorFlow",
      url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
      duration: "4 months",
      level: "Intermediate",
    },
    {
      name: "AWS ML Specialty",
      description: "Design and deploy ML solutions on AWS",
      url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
      duration: "4–8 months",
      level: "Specialty",
    },
    {
      name: "Google ML Engineer",
      description: "Professional ML engineering on Google Cloud",
      url: "https://cloud.google.com/learn/certification/machine-learning-engineer",
      duration: "6–12 months",
      level: "Professional",
    },
  ],
  it_support: [
    {
      name: "CompTIA A+",
      description: "Entry-level IT support and hardware fundamentals",
      url: "https://www.comptia.org/certifications/a",
      duration: "2–4 months",
      level: "Entry",
    },
    {
      name: "Google IT Support Certificate",
      description: "IT support skills from Google via Coursera",
      url: "https://www.coursera.org/professional-certificates/google-it-support",
      duration: "3–6 months",
      level: "Entry",
    },
    {
      name: "ITIL 4 Foundation",
      description: "IT service management best practices",
      url: "https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",
      duration: "1–2 months",
      level: "Entry",
    },
  ],
  information_systems: [
    {
      name: "CBAP",
      description: "Certified Business Analysis Professional from IIBA",
      url: "https://www.iiba.org/certifications/cbap/",
      duration: "6–12 months",
      level: "Professional",
    },
    {
      name: "PMI-PBA",
      description: "Business analysis certification from PMI",
      url: "https://www.pmi.org/certifications/business-analysis-pba",
      duration: "4–6 months",
      level: "Professional",
    },
    {
      name: "SAP Certified Associate",
      description: "Business process and ERP skills with SAP",
      url: "https://training.sap.com/certification/",
      duration: "3–5 months",
      level: "Associate",
    },
  ],
};

export default certifications;


const questions = [

  //SECTION 1: DIRECT INTEREST

  {
    id: "q1",
    section: "Career Interests",
    type: "single_choice",
    text: "Which area of technology interests you the most?",
    answers: [
      {
        id: "q1_a",
        text: "Protecting systems and data from hackers and cyber threats",
        weights: { cybersecurity: 5, networking: 2 },
      },
      {
        id: "q1_b",
        text: "Building apps and software that people use every day",
        weights: { software_engineering: 5, web_development: 3 },
      },
      {
        id: "q1_c",
        text: "Working with data to find trends and make predictions",
        weights: { data_science: 5, database_admin: 2, ai_ml: 3 },
      },
      {
        id: "q1_d",
        text: "Designing how technology looks and feels for users",
        weights: { ux_ui_design: 5, web_development: 2 },
      },
      {
        id: "q1_e",
        text: "Managing and deploying systems and cloud infrastructure",
        weights: { cloud_computing: 5, networking: 3, it_support: 1 },
      },
      {
        id: "q1_f",
        text: "Leading tech projects and coordinating teams",
        weights: { it_project_management: 5, information_systems: 3 },
      },
    ],
  },

  {
    id: "q2",
    section: "Career Interests",
    type: "single_choice",
    text: "Which of the following tasks sounds most exciting to you?",
    answers: [
      {
        id: "q2_a",
        text: "Trying to break into a system before a real attacker can",
        weights: { cybersecurity: 5 },
      },
      {
        id: "q2_b",
        text: "Training a model to recognize patterns in data",
        weights: { ai_ml: 5, data_science: 3 },
      },
      {
        id: "q2_c",
        text: "Building a mobile app from scratch",
        weights: { software_engineering: 5, web_development: 3 },
      },
      {
        id: "q2_d",
        text: "Interviewing users to understand their frustrations with a product",
        weights: { ux_ui_design: 5, information_systems: 2 },
      },
      {
        id: "q2_e",
        text: "Automating deployments and managing cloud servers",
        weights: { cloud_computing: 5, networking: 2 },
      },
      {
        id: "q2_f",
        text: "Designing a database schema for a large organization",
        weights: { database_admin: 5, information_systems: 2 },
      },
    ],
  },

  //SECTION 2: SKILLS & STRENGTHS

  {
    id: "q3",
    section: "Skills & Strengths",
    type: "single_choice",
    text: "Which skill do you feel most confident in — or most excited to develop?",
    answers: [
      {
        id: "q3_a",
        text: "Writing and debugging code",
        weights: { software_engineering: 5, web_development: 3, ai_ml: 2 },
      },
      {
        id: "q3_b",
        text: "Working with spreadsheets, SQL, or data tools",
        weights: { data_science: 5, database_admin: 4, information_systems: 2 },
      },
      {
        id: "q3_c",
        text: "Understanding how networks and systems connect",
        weights: { networking: 5, cybersecurity: 3, cloud_computing: 2 },
      },
      {
        id: "q3_d",
        text: "Communicating ideas visually through design or diagrams",
        weights: { ux_ui_design: 5, it_project_management: 2 },
      },
      {
        id: "q3_e",
        text: "Organizing projects, timelines, and people",
        weights: { it_project_management: 5, information_systems: 3 },
      },
      {
        id: "q3_f",
        text: "Troubleshooting and diagnosing technical problems",
        weights: { it_support: 5, networking: 3, cybersecurity: 2 },
      },
    ],
  },

  {
    id: "q4",
    section: "Skills & Strengths",
    type: "single_choice",
    text: "In school or personal projects, which type of work have you found most natural?",
    answers: [
      {
        id: "q4_a",
        text: "Math-heavy work — statistics, algorithms, or logic",
        weights: { data_science: 5, ai_ml: 5, software_engineering: 2 },
      },
      {
        id: "q4_b",
        text: "Creative work — design, layout, or storytelling",
        weights: { ux_ui_design: 5, web_development: 3 },
      },
      {
        id: "q4_c",
        text: "Hands-on technical work — configuring, installing, fixing",
        weights: { it_support: 5, networking: 4, cloud_computing: 2 },
      },
      {
        id: "q4_d",
        text: "Strategic work — planning, requirements, process improvement",
        weights: { it_project_management: 5, information_systems: 4 },
      },
      {
        id: "q4_e",
        text: "Security-minded work — finding flaws, assessing risk",
        weights: { cybersecurity: 5, networking: 2 },
      },
      {
        id: "q4_f",
        text: "Building things — writing features, APIs, or services",
        weights: { software_engineering: 5, web_development: 4, cloud_computing: 2 },
      },
    ],
  },

  //SECTION 3: WORK STYLE & VALUES

  {
    id: "q5",
    section: "Work Style & Values",
    type: "single_choice",
    text: "What kind of work environment appeals to you most?",
    answers: [
      {
        id: "q5_a",
        text: "A fast-paced environment where threats change daily",
        weights: { cybersecurity: 4, it_support: 2 },
      },
      {
        id: "q5_b",
        text: "A research-oriented setting where I spend time experimenting",
        weights: { ai_ml: 5, data_science: 4 },
      },
      {
        id: "q5_c",
        text: "A collaborative team building a product users love",
        weights: { software_engineering: 3, web_development: 3, ux_ui_design: 3 },
      },
      {
        id: "q5_d",
        text: "A structured environment managing infrastructure and uptime",
        weights: { cloud_computing: 4, networking: 4, database_admin: 2 },
      },
      {
        id: "q5_e",
        text: "A business-facing role where I translate between tech and non-tech people",
        weights: { information_systems: 5, it_project_management: 4 },
      },
      {
        id: "q5_f",
        text: "A user-facing role where I see direct impact on people's experiences",
        weights: { ux_ui_design: 5, it_support: 3 },
      },
    ],
  },

  {
    id: "q6",
    section: "Work Style & Values",
    type: "single_choice",
    text: "What matters most to you in your future career?",
    answers: [
      {
        id: "q6_a",
        text: "High demand and strong job security",
        weights: { cybersecurity: 4, cloud_computing: 3, data_science: 3 },
      },
      {
        id: "q6_b",
        text: "Creative freedom and visible impact on a product",
        weights: { ux_ui_design: 5, software_engineering: 3, web_development: 3 },
      },
      {
        id: "q6_c",
        text: "Solving complex, intellectually challenging problems",
        weights: { ai_ml: 5, data_science: 4, cybersecurity: 3 },
      },
      {
        id: "q6_d",
        text: "Clear processes, structure, and measurable outcomes",
        weights: { it_project_management: 5, information_systems: 4 },
      },
      {
        id: "q6_e",
        text: "Helping people and being the person others rely on",
        weights: { it_support: 5, it_project_management: 2 },
      },
      {
        id: "q6_f",
        text: "Working with cutting-edge tools and emerging tech",
        weights: { ai_ml: 5, cloud_computing: 4, cybersecurity: 3 },
      },
    ],
  },

  //SECTION 4: SCENARIO-BASED

  {
    id: "q7",
    section: "Scenarios",
    type: "single_choice",
    text: "Your team just launched a new web app. Which part of the process would you have enjoyed most?",
    answers: [
      {
        id: "q7_a",
        text: "Running security audits and testing for vulnerabilities before launch",
        weights: { cybersecurity: 5, networking: 1 },
      },
      {
        id: "q7_b",
        text: "Writing the front-end code that users interact with",
        weights: { web_development: 5, ux_ui_design: 2 },
      },
      {
        id: "q7_c",
        text: "Designing the database structure and optimizing queries",
        weights: { database_admin: 5, software_engineering: 2 },
      },
      {
        id: "q7_d",
        text: "Setting up the cloud hosting and deployment pipeline",
        weights: { cloud_computing: 5, networking: 2 },
      },
      {
        id: "q7_e",
        text: "Conducting user testing to see if the design is intuitive",
        weights: { ux_ui_design: 5, information_systems: 2 },
      },
      {
        id: "q7_f",
        text: "Coordinating the sprint schedule and keeping the team on track",
        weights: { it_project_management: 5, information_systems: 2 },
      },
    ],
  },

  {
    id: "q8",
    section: "Scenarios",
    type: "single_choice",
    text: "A company's system goes down at 2am. What role would you want to be in?",
    answers: [
      {
        id: "q8_a",
        text: "The one investigating whether it was an attack",
        weights: { cybersecurity: 5, networking: 2 },
      },
      {
        id: "q8_b",
        text: "The one spinning up backup servers in the cloud",
        weights: { cloud_computing: 5, networking: 3 },
      },
      {
        id: "q8_c",
        text: "The one running diagnostics on the network and hardware",
        weights: { networking: 5, it_support: 4 },
      },
      {
        id: "q8_d",
        text: "The one reviewing database logs to find the root cause",
        weights: { database_admin: 5, data_science: 2 },
      },
      {
        id: "q8_e",
        text: "The one coordinating the response and communicating with stakeholders",
        weights: { it_project_management: 5, information_systems: 3 },
      },
      {
        id: "q8_f",
        text: "I'd rather not be the one on call at 2am",
        weights: { ux_ui_design: 2, data_science: 2, ai_ml: 2, software_engineering: 2 },
      },
    ],
  },

  //SECTION 5: EXPERIENCE & BACKGROUND

  {
    id: "q9",
    section: "Experience & Background",
    type: "single_choice",
    text: "Which best describes your experience so far?",
    answers: [
      {
        id: "q9_a",
        text: "I've built personal or class projects",
        weights: { software_engineering: 4, web_development: 4, data_science: 2 },
      },
      {
        id: "q9_b",
        text: "I've worked in IT support, helping users with tech issues",
        weights: { it_support: 5, networking: 3, it_project_management: 1 },
      },
      {
        id: "q9_c",
        text: "I've studied networking, security, or cloud platforms",
        weights: { networking: 4, cybersecurity: 4, cloud_computing: 3 },
      },
      {
        id: "q9_d",
        text: "I've worked with data. Spreadsheets, SQL, or analytics tools",
        weights: { data_science: 5, database_admin: 4, information_systems: 2 },
      },
      {
        id: "q9_e",
        text: "I've been involved in managing projects or leading a team",
        weights: { it_project_management: 5, information_systems: 3 },
      },
      {
        id: "q9_f",
        text: "I'm fairly new, I'm still exploring what I like",
        weights: { it_support: 2, web_development: 2, information_systems: 2 },
      },
    ],
  },

  {
    id: "q10",
    section: "Experience & Background",
    type: "single_choice",
    text: "Which course or subject have you found most engaging so far?",
    answers: [
      {
        id: "q10_a",
        text: "Programming or software development",
        weights: { software_engineering: 5, web_development: 3, ai_ml: 2 },
      },
      {
        id: "q10_b",
        text: "Networking or Operating Systems",
        weights: { networking: 5, cybersecurity: 3, cloud_computing: 2 },
      },
      {
        id: "q10_c",
        text: "Databases or Data Management",
        weights: { database_admin: 5, data_science: 3, information_systems: 2 },
      },
      {
        id: "q10_d",
        text: "Project Management or Systems Analysis",
        weights: { it_project_management: 5, information_systems: 4 },
      },
      {
        id: "q10_e",
        text: "Math, Statistics, or Machine Learning",
        weights: { ai_ml: 5, data_science: 5 },
      },
      {
        id: "q10_f",
        text: "Design, Human Computer Interaction, or Usability",
        weights: { ux_ui_design: 5, web_development: 2 },
      },
    ],
  },

  {
    id: "q11",
    section: "Experience & Background",
    type: "multi_select",
    text: "Which of these tools have you used before? Choose up to 5 that apply.",
    answers: [
      {
        id: "q11_a",
        text: "Python",
        weights: {data_science: 5, software_engineering: 4, ai_ml: 3}, 
      },
      {
        id: "q11_b",
        text: "Javascript",
        weights: {web_development: 5, ux_ui_design: 4, software_engineering: 3}, 
      },
      {
        id: "q11_c",
        text: "Java",
        weights: {software_engineering: 5, cloud_computing: 4, networking: 3},
      },
      {
        id: "q11_d",
        text: "Pandas",
        weights: {database_admin: 5, ai_ml: 4, data_science: 3},
      },
      {
        id: "q11_e",
        text: "Wireshark",
        weights: {networking: 5, cybersecurity: 4, cloud_computing: 3},
      },
      {
        id: "q11_f",
        text: "Microsoft Azure",
        weights: {ai_ml: 5, data_science: 4, cloud_computing: 3},
      },
      {
        id: "q11_g",
        text: "Ticketing Systems",
        weights: {it_support: 5, it_project_management: 4, information_systems: 3},
      },
      {
        id: "q11_h",
        text: "Postman (or any API service)",
        weights: {ux_ui_design: 5, web_development: 4, information_systems: 3},
      },
    ],
  },

];

module.exports = questions;

const jobRoles = [
  {
    id: 11110,
    role: "HR/Admin Intern",
    description:
      "Pursuing a degree in Human Resources, Business Administration, or a related field. Strong organizational and multitasking skills. Excellent communication and interpersonal skills. Ability to maintain confidentiality and handle sensitive information. Eagerness to learn and contribute to a collaborative team environment.",
  },
  {
    id: 11212,
    role: "Operations Engineer – R1",
    description:
      "Ensure seamless operations of systems and applications. Manage data workflows and ETL processes. Provide technical support to resolve issues and troubleshoot problems. Monitor system performance and identify areas for optimization. Collaborate with cross-functional teams to implement solutions and improvements. Implement automation to streamline processes and increase efficiency.",
  },
  {
    id: 11213,
    role: "QA Engineer – R1",
    description:
      "Conduct thorough exploratory testing to identify and address potential data issues. Develop and execute data validation scripts and procedures. Contribute to the enhancement of overall product quality through rigorous testing methodologies. Analyze and interpret data to provide insights into potential improvements in data management processes. Stay abreast of industry best practices and emerging trends in data management. Collaborate with cross-functional teams to implement data quality improvement processes.",
  },
  {
    id: 11214,
    role: "Senior QA Engineer – R2",
    description:
      "Manage and oversee complex datasets, ensuring accuracy, integrity, and reliability. Conduct thorough exploratory testing to identify and address potential data issues. Develop and execute data validation scripts and procedures. Contribute to the enhancement of overall product quality through rigorous testing methodologies. Analyze and interpret data to provide insights into potential improvements in data management processes. Stay abreast of industry best practices and emerging trends in data management. Lead and mentor a small QA team, providing guidance and support in testing activities. Collaborate with cross-functional teams to implement data quality improvement processes.",
  },
  {
    id: 11512,
    role: "Senior Data Engineer – R2",
    description:
      "Utilize Python programming skills to design and implement seamless integration solutions. Develop and maintain automated processes for efficient data extraction, transformation, and loading (ETL). Collaborate with cross-functional teams to understand integration requirements and implement effective solutions. Troubleshoot and resolve issues related to integration and automation processes. Stay current with industry best practices and emerging trends in Python integration and automation. Provide technical expertise and guidance to ensure the overall efficiency and effectiveness of integration projects. Work closely with stakeholders to gather requirements and translate them into technical specifications.",
  },
  {
    id: 11513,
    role: "Principal Data Engineer – R3",
    description:
      "Utilize Python programming skills to design and implement seamless integration solutions. Develop and maintain automated processes for efficient data extraction, transformation, and loading (ETL). Collaborate with cross-functional teams to understand integration requirements and implement effective solutions. Troubleshoot and resolve issues related to integration and automation processes. Stay current with industry best practices and emerging trends in Python integration and automation. Provide technical expertise and guidance to ensure the overall efficiency and effectiveness of integration projects. Work closely with stakeholders to gather requirements and translate them into technical specifications. Collaborate with a small team and lead them if necessary.",
  },
  {
    id: 11712,
    role: "Senior ML Engineer – R2",
    description:
      "Apply statistical analysis expertise to extract meaningful insights from complex datasets. Contribute to informed decision-making processes by providing actionable insights. Assess and enhance the performance of machine learning models using advanced techniques. Design, implement, and deploy data science solutions with a focus on efficiency and scalability. Utilize strong proficiency in Python to develop robust and scalable machine learning models. Leverage Jupyter notebooks and AWS SageMaker for collaborative and cloud-based development. Collaborate with cross-functional teams to gather requirements and implement effective ML solutions. Stay abreast of industry best practices and emerging trends in machine learning and data science.",
  },
  {
    id: 11713,
    role: "Principal ML Engineer – R3",
    description:
      "Apply statistical analysis expertise to extract meaningful insights from complex datasets. Contribute to informed decision-making processes by providing actionable insights. Assess and enhance the performance of machine learning models using advanced techniques. Design, implement, and deploy data science solutions with a focus on efficiency and scalability. Utilize strong proficiency in Python to develop robust and scalable machine learning models. Leverage Jupyter notebooks and AWS SageMaker for collaborative and cloud-based development. Collaborate with cross-functional teams to gather requirements and implement effective ML solutions. Stay abreast of industry best practices and emerging trends in machine learning and data science.",
  },
  {
    id: 11413,
    role: "Principal Full Stack Developer – R3",
    description:
      "Backend Engineer: Proficient in PySpark and AWS EMR for backend development. Strong proficiency in Java or Python for backend coding. Experience in implementing DevOps practices to enhance development workflows. Collaborate with cross-functional teams to gather requirements and implement backend solutions. Ensure the efficiency, scalability, and reliability of backend systems. Frontend Engineer: Expertise in crafting dynamic and responsive user interfaces using Angular, HTML, and Flask. Proficient in building seamless web applications with a focus on innovative design. Effective integration of frontend technologies to enhance user experience. Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces. Work closely with backend engineers to integrate frontend and backend components. Stay updated on emerging trends and best practices in frontend development.",
  },
  {
    id: 11411,
    role: "Full Stack Developer – R1",
    description:
      "Backend Engineer: Proficient in PySpark and AWS EMR for backend development. Strong proficiency in Java or Python for backend coding. Experience in implementing DevOps practices to enhance development workflows. Collaborate with cross-functional teams to gather requirements and implement backend solutions. Ensure the efficiency, scalability, and reliability of backend systems. Frontend Engineer: Expertise in crafting dynamic and responsive user interfaces using Angular, HTML, and Flask. Proficient in building seamless web applications with a focus on innovative design. Effective integration of frontend technologies to enhance user experience. Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces. Work closely with backend engineers to integrate frontend and backend components. Stay updated on emerging trends and best practices in frontend development.",
  },
  {
    id: 11412,
    role: "Senior Full Stack Developer – R2",
    description:
      "Backend Engineer: Proficient in PySpark and AWS EMR for backend development. Strong proficiency in Java or Python for backend coding. Experience in implementing DevOps practices to enhance development workflows. Collaborate with cross-functional teams to gather requirements and implement backend solutions. Ensure the efficiency, scalability, and reliability of backend systems. Frontend Engineer: Expertise in crafting dynamic and responsive user interfaces using Angular, HTML, and Flask. Proficient in building seamless web applications with a focus on innovative design. Effective integration of frontend technologies to enhance user experience. Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces. Work closely with backend engineers to integrate frontend and backend components. Stay updated on emerging trends and best practices in frontend development.",
  },
  {
    id: 11414,
    role: "Sr Principal Full Stack Developer – R4",
    description:
      "Backend Engineer: Proficient in PySpark and AWS EMR for backend development. Strong proficiency in Java or Python for backend coding. Experience in implementing DevOps practices to enhance development workflows. Collaborate with cross-functional teams to gather requirements and implement backend solutions. Ensure the efficiency, scalability, and reliability of backend systems. Frontend Engineer: Expertise in crafting dynamic and responsive user interfaces using Angular, HTML, and Flask. Proficient in building seamless web applications with a focus on innovative design. Effective integration of frontend technologies to enhance user experience. Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces. Work closely with backend engineers to integrate frontend and backend components. Stay updated on emerging trends and best practices in frontend development.",
  },
  {
    id: 11911,
    role: "Backend Developer (New position – April-10-2024)",
    description:
      "An experienced Backend Developer with 4-6 years of expertise in developing robust backend APIs using Java, Spring Boot, PostgreSQL, and AWS. The ideal candidate will be responsible for designing, implementing, and maintaining scalable and efficient backend solutions to support our web and mobile applications. As a Backend Developer, you will collaborate closely with cross-functional teams to understand business requirements, architect solutions, and ensure seamless integration between frontend and backend systems. You will play a key role in optimizing application performance, ensuring data integrity, and implementing security best practices.",
  },
  {
    id: 11910,
    role: "Frontend Developer (New position – April-10-2024)",
    description:
      "A skilled Front End Developer with 4-6 years of experience to join our dynamic team. The ideal candidate will be proficient in React.js, JavaScript, CSS, and HTML, with a strong understanding of front-end development principles. As a Front End Developer, you will collaborate with cross-functional teams to design and develop user-friendly web applications, ensuring seamless integration of user interface elements and functionality. You will be responsible for translating design mockups and wireframes into responsive and interactive web experiences, optimizing application performance, and troubleshooting issues as they arise. Mobile App development experience with React Native is desirable.",
  },
  // Add other job roles here...
];

export default jobRoles;

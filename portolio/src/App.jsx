import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>Trent Breneman</h1>
        <p>Software Developer at iSolvRisk Inc.</p>
      </header>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Versatile full-stack web developer with hands-on experience building and deploying robust applications using technologies such as React, Node.js, Express, SQL, and JavaScript. Skilled in designing intuitive user interfaces, developing efficient backends, and integrating databases for real-world applications. Proven ability to work on team-based projects and independently deliver results. Passionate about learning new technologies and solving challenging problems in web development.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Software Developer</h3>
          <p><strong>iSolvRisk Inc.</strong></p>
          <p>February 2024 - Present</p>
          <ul>
            <li>Developed and maintained user-facing applications using React and TypeScript, ensuring high-quality, interactive user experiences.</li>
            <li>Designed and implemented robust backends with PostgreSQL to manage complex data workflows efficiently.</li>
            <li>Collaborated with a cross-functional team of developers, designers, and stakeholders to deliver scalable software solutions.</li>
            <li>Analyzed and visualized data from various sources to support decision-making and enhance application functionality.</li>
            <li>Streamlined team workflows by integrating Agile methodologies and using Git for version control and collaboration.</li>
            <li>Built full-stack features using Flask, React, PostgreSQL, and Docker to improve team productivity and showcase GitHub collaboration trends.</li>
            <li>Implemented secure user authentication and authorization using industry best practices.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Assistant Kitchen Manager</h3>
          <p><strong>Charbar7</strong></p>
          <p>October 2018 - October 2021</p>
          <ul>
            <li>Managed daily kitchen operations, including staff scheduling and inventory management.</li>
            <li>Trained and mentored kitchen staff to ensure consistency in food preparation and quality.</li>
            <li>Oversaw food safety and sanitation compliance in adherence to local health regulations.</li>
            <li>Streamlined kitchen workflows to improve efficiency during peak hours.</li>
            <li>Collaborated with management to develop new menu items and specials, boosting customer satisfaction.</li>
            <li>Maintained strong communication with front-of-house staff to ensure seamless service.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, TypeScript, Python, SQL</li>
          <li><strong>Frameworks/Libraries:</strong> React, Node.js, Express.js, Next.js</li>
          <li><strong>Databases:</strong> PostgreSQL, MySQL, Firebase</li>
          <li><strong>Developer Tools:</strong> Git, GitHub, Docker, Postman</li>
          <li><strong>Other Tools/Technologies:</strong> Webpack, Tailwind CSS, REST APIs, CI/CD</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Business Homepage | PERN Stack</h3>
          <p>
            Developed a fully functional business homepage using the PERN stack to provide users with an interactive and informative experience. Built a responsive React frontend showcasing the company’s services, values, and contact information. Created a robust backend with Node.js and Express, handling API routes and business logic. Integrated PostgreSQL to manage business data, including client information and service offerings.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <p><strong>The Odin Project</strong> - Full Stack Web Development Certification (November 2022 - May 2023)</p>
        <p>Mastered technologies such as React, Node.js, JavaScript, SQL, and PostgreSQL through hands-on projects.</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:tbreneman@icloud.com">tbreneman@icloud.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer">linkedin.com/in/TrentBreneman</a></p>
        <p>GitHub: <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer">github.com/TrentBreneman</a></p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Trent Breneman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

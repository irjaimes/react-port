function Resume() {
  return (
    <section className="resume-section page-section">
      <h2>Resume</h2>

      <div className="skills-list">
        <div>
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
          <h2>Back-End</h2>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Nodejs</li>
            <li>mySQL</li>
          </ul>
        </div>

        <h2>Education</h2>
        <p>B.A. in Studio Art | University of Texas at Austin | 2007-2011</p>
        <a
          className="download"
          href="https://www.linkedin.com/in/irjaimes/"
          target="_blank"
          rel="noreferrer"
        >
          Download HERE
        </a>
      </div>
    </section>
  );
}

export default Resume;

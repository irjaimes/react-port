function Resume() {
  return (
    <section className='resume-section page-section'>
      <h2>Resume</h2>

      <div className='skills-list'>
        <div id='frontend'>
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div id='backend'>
          <h2>Back-End</h2>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Nodejs</li>
            <li>mySQL</li>
          </ul>
        </div>
        <div id='education'>
          <h2>Education</h2>
          <span>
            B.A. in Studio Art | University of Texas at Austin | 2007-2011
          </span>
          <br></br>
          <br></br>
          {/* <a
            className='download'
            href='https://www.linkedin.com/in/irjaimes/'
            target='_blank'
            rel='noreferrer'
          >
            Download <b>HERE</b>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Resume;

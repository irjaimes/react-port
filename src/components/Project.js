import { GrGithub } from 'react-icons/gr';

function Portfolio() {
  return (
    <section className='page-section' id='work'>
      <h2>Projects</h2>
      <div className='grid-container'>
        <a
          className='grid-item recess'
          href='https://pacific-inlet-95494.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <h3>Recess</h3>
            <span>JavaScript/Handlebars/mySQL </span>
            <span
              className='repo'
              href='https://github.com/Full-Stack-Application-Project/recess'
              target='_blank'
              rel='noreferrer'
            >
              <GrGithub />
            </span>
          </div>
        </a>

        <a
          className='grid-item wygc'
          href='https://jpkashlak.github.io/who-you-gonna-call/'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <h3>Who You Gonna Call</h3>
            <span>JavaScript/HTML/CSS </span>
            <span
              className='repo'
              href='https://github.com/JPKashlak/who-you-gonna-call'
              target='_blank'
              rel='noreferrer'
            >
              <GrGithub />
            </span>
          </div>
        </a>

        <a
          className='grid-item techblog'
          href='https://limitless-shore-56034.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <h3>Tech Blog</h3>
            <span>JavaScript/Sequelize</span>
            <span
              className='repo'
              href='https://github.com/irjaimes/tech-blog'
              target='_blank'
              rel='noreferrer'
            >
              <GrGithub />
            </span>
          </div>
        </a>

        <a
          className='grid-item ecommerce'
          href='https://drive.google.com/file/d/10vxPUpXRqn-kXPf5ai5dHqXooljA-q2W/view'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <h3>Backend E-Commerce</h3>
            <span>Javascript/Sequelize/mySQL </span>
            <span
              className='repo'
              href='https://github.com/irjaimes/e-commerce'
              target='_blank'
              rel='noreferrer'
            >
              <GrGithub />
            </span>
          </div>
        </a>

        <a
          className='grid-item note-taker'
          href='https://xprss-notetkr.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <h3>Note-Taker</h3>
            <span>Javacript/Express</span>
            <span
              className='repo'
              href='https://github.com/irjaimes/express-note-taker'
              target='_blank'
              rel='noreferrer'
            >
              <GrGithub />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;

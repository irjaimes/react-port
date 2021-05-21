import { GrGithub } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer>
      <section className="page-section contact" id="contact">
        <div className="address">
          <a className={"email icon"} href="mailto:irjaimes@outlook.com">
            <HiOutlineMail />
          </a>
          <a
            className="github icon"
            href="https://github.com/irjaimes"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
          <a
            className="linkedin icon"
            href="https://www.linkedin.com/in/irjaimes/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
          <a
            className="instagram icon"
            href="https://www.instagram.com/izzie_beezie/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

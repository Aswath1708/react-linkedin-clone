import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-links">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>
          Privacy & Terms <FontAwesomeIcon icon={faCaretDown} />
        </p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p>
          Business Services <FontAwesomeIcon icon={faCaretDown} />
        </p>
        <p>Get the LinkedIn app</p>
        <p>More</p>
      </section>
      <section className="footer-text">
        <span>
          Linked <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff" }} />
        </span>
        LinkedIn Corporation &copy; 2023
      </section>
    </div>
  );
};

export default Footer;

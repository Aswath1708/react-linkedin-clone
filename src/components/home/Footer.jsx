import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHomeFooterLinks } from "../../utils/getFooterLinks";
import styles from '../../styles/footer/HomeFooter.module.css';

const Footer = () => {
  const arrayOfFooterLinks = getHomeFooterLinks();
  return (
    <div className={styles.footer}>
      <section className={styles.footerLinks}>
        {arrayOfFooterLinks.map((link, i) => {
          return <p key={i}>{link}</p>;
        })}
      </section>
      <section className={styles.footerText}>
        <span>
          Linked <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff" }} />
        </span>
        LinkedIn Corporation &copy; 2023
      </section>
    </div>
  );
};

export default Footer;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { Business } from "../navlinks/Business";
import { useState } from "react";
import styles from "../../styles/navbar/NavLinks.module.css";
import { getNavLinks } from "../../utils/getNavLinks";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BusinessLink } from "../../assets/businessLink/BusinessLink.svg";

const NavLinks = () => {
  const [showModal, setShowModal] = useState(false);

  const navLinks = getNavLinks();

  return (
    <div className={styles.navLinks}>
      <ul>
        {navLinks.map(({ link, icon, text, dropdown }, i) => {
          return (
            <li key={i}>
              <NavLink to={link}>
                <FontAwesomeIcon
                  icon={icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <p>
                  {text}
                  {dropdown && <FontAwesomeIcon icon={dropdown} />}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={styles.businessPremiumLinks}>
        <div className={styles.businessLink} onClick={() => setShowModal(true)}>
          <BusinessLink />
          <div>
            For Business <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {showModal && <Business setShowModal={setShowModal} />}
        </div>

        <Link to="/premium">Try premium for free</Link>
      </div>
    </div>
  );
};

export default NavLinks;

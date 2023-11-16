import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { Business } from "../navlinks/Business";
import { useState } from "react";
import styles from "../../styles/navbar/NavLinks.module.css";
import { getNavLinks } from "../../utils/getNavLinks";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BusinessLink } from "../../assets/businessLink/BusinessLink.svg";
import DropDown from "./DropDown";
import ProfilePicture from "../Account/ProfilePicture";

const NavLinks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropDown,setShowDropDown] = useState(false);

  const navLinks = getNavLinks();

  const handleClick = () =>{
    setShowModal(true);
    // document.querySelector("#business-modal").style.display="flex";
  }

  return (
    <div className={styles.navLinks}>
      <ul>
        {navLinks.map(({ link, icon, text }, i) => {
          return (
            <li key={i}>
              <NavLink to={link}>
                <FontAwesomeIcon
                  icon={icon}
                  style={{ height: "20px", width: "20px" }}
                />
                <p>
                  {text}
                </p>
              </NavLink>
            </li>
          );
        })}
        <li>
          <div className={styles.profileLink} onClick={()=>setShowDropDown(!showDropDown)}>
            <ProfilePicture/>
            <p>
              Me<FontAwesomeIcon icon={faCaretDown}/>
              {showDropDown&&<DropDown setShowDropDown={setShowDropDown}/>}
            </p>
          </div>
        </li>
      </ul>
      <div className={styles.businessPremiumLinks}>
        <div className={styles.businessLink} onClick={handleClick}>
          <BusinessLink />
          <div>
            For Business <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {showModal && <Business setShowModal={setShowModal} showModal={showModal}/>}
          {/* <Business/> */}
        </div>

        <Link to="/premium">Try premium for free</Link>
      </div>
    </div>
  );
};

export default NavLinks;

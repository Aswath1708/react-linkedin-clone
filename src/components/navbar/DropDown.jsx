import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/authentication/ProfileDropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleHalfStroke,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../App";

const DropDown = () => {
  const navigate = useNavigate();
  const { darkTheme, setDarkTheme } = useContext(AuthContext);
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const mouseOver = (e) => {
    e.target.style.backgroundColor = darkTheme ? "#575c60" : "#fff";
  };
  const mouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <div
      className={styles.dropDownContainer}
      style={{ backgroundColor: darkTheme ? "#1b1f23" : "#ddd" }}
    >
      <Link
        to="account"
        style={{ color: darkTheme ? "#fff" : "#000" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        <FontAwesomeIcon icon={faUser} />
        View Profile
      </Link>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        style={{ color: darkTheme ? "#fff" : "#000" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        Switch Theme
      </button>
      <p
        onClick={handleSignOut}
        style={{ color: darkTheme ? "#ffffff99" : "#00000099" }}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Sign-Out
      </p>
    </div>
  );
};

export default DropDown;

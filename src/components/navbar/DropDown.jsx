import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/authentication/ProfileDropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={styles.dropDownContainer}>
      <Link to="account">
        <FontAwesomeIcon icon={faUser} />
        View Profile
      </Link>

      <p onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Sign-Out
      </p>
    </div>
  );
};

export default DropDown;

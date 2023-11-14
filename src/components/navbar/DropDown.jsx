import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../styles/authentication/ProfileDropDown.module.css'

const DropDown = () => {
  const { setJwtToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setJwtToken("");
    navigate("/login");
  };
  return (
    <div className={styles.dropDownContainer}>
      <Link to="account">Profile</Link>
      <Link to="/login">Log-In</Link>
      <p onClick={handleClick}>Log-Out</p>
    </div>
  );
};

export default DropDown;

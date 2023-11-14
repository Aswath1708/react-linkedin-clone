import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/authentication/LoginPageNavList.module.css";
import { getLoginPageNavLinks } from "../../utils/getNavLinks";

const LoginPageNavList = () => {
  const navigate = useNavigate();
  const navLinks = getLoginPageNavLinks();
  const handleJoinNow = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <nav className={styles.loginNavBar}>
      <h1 onClick={() => navigate("/home")}>
        Linked
        <FontAwesomeIcon icon={faLinkedin} />
      </h1>
      <div>
        <ul>
          {navLinks.map(({ icon, text }, i) => {
            return (
              <li key={i}>
                <FontAwesomeIcon icon={icon} />
                {text}
              </li>
            );
          })}
        </ul>

        <div>
          <a href="#">Join now</a>
          <button onClick={handleJoinNow}>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default LoginPageNavList;

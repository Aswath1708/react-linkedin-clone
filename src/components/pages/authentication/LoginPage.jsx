import React, { useRef, useState } from "react";
import styles from "../../../styles/LoginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faEye,
  faBriefcase,
  faEyeSlash,
  faLaptop,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [eMailErrorMessage, seteMailErrorMessage] = useState("");
  const [passWordErrorMessage, setPassWordErrorMessage] = useState("");
  const [emptyFieldsCheck, setEmptyFieldsCheck] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const eMailRef = useRef();
  const passWordRef = useRef();
  const passWordSectionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: eMailValue } = eMailRef.current;
    const { value: passWordValue } = passWordRef.current;
    const eMailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passWordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // console.log(passWordValue.length, typeof passWordValue.lenghth,passWordRef);

    if (eMailValue === "" || passWordValue === "") {
      setEmptyFieldsCheck("Input fields cannot be Empty!");
      if (eMailValue === "") {
        eMailRef.current.style.border = "1px solid red";
      } else {
        eMailRef.current.style.border = "1px solid green";
      }
      if (passWordValue === "") {
        passWordSectionRef.current.style.border = "1px solid red";
      } else {
        passWordSectionRef.current.style.border = "1px solid green";
      }
    } else {
      setEmptyFieldsCheck("");
      if (!eMailRegEx.test(eMailValue)) {
        seteMailErrorMessage("Please Enter a valid mail address!");
        eMailRef.current.style.border = "1px solid red";
        setValidEmail(false);
      } else {
        seteMailErrorMessage("");
        eMailRef.current.style.border = "1px solid green";
        setValidEmail(true);
      }
      if (!passWordRegEx.test(passWordValue)) {
        setPassWordErrorMessage(
          "Password must be atleast 8 characters long. Atleast one lowercase alphabet, one uppercase alphabet, one number and one special character."
        );
        passWordSectionRef.current.style.border = "1px solid red";
        setValidPassword(false);
      } else {
        setPassWordErrorMessage("");
        passWordSectionRef.current.style.border = "1px solid green";
        setValidPassword(true);
      }
    }

    if (validEmail && validPassword) {
      fetch("https://academics.newtonschool.co/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
        body: JSON.stringify({
          email: eMailValue,
          password: passWordValue,
          appType: "linkedin",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          console.log(data);
          localStorage.setItem("JWT", JSON.stringify(data.token));
        })
        .catch((err) => console.log(err));
    }
  };

  const handlePasswordCheck = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleJoinNow = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className={styles.loginPage}>
      <nav className={styles.loginNavBar}>
        <h1 onClick={() => navigate("/home")}>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </h1>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faNewspaper} />
              Articles
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              People
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
              Learning
            </li>
            <li>
              <FontAwesomeIcon icon={faBriefcase} />
              Jobs
            </li>
            <li>
              <FontAwesomeIcon icon={faLaptop} />
              Get the app
            </li>
          </ul>

          <div>
            <a href="#">Join now</a>
            <button onClick={handleJoinNow}>Sign up</button>
          </div>
        </div>
      </nav>
      <div className={styles.loginFormContainer}>
        <h1>Welcome to your professional community</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" ref={eMailRef} />
          <p className={styles.errorMessage}>{eMailErrorMessage}</p>
          <label htmlFor="passWord">Password</label>
          <section
            className={styles.passWordContainer}
            ref={passWordSectionRef}
          >
            <input
              type={showPassword ? "password" : "text"}
              name="passWord"
              id="passWord"
              ref={passWordRef}
            />
            <button onClick={handlePasswordCheck}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          </section>
          <p className={styles.errorMessage}>{passWordErrorMessage}</p>
          <p className={styles.errorMessage}>{emptyFieldsCheck}</p>
          <a href="#">Forgot password?</a>
          <button className={styles.signInButton} onClick={handleSubmit}>
            Sign in
          </button>
          <section className={styles.or}>
            <span></span>or<span></span>
          </section>
          <button className={styles.joinNowButton} onClick={handleJoinNow}>
            New to LinkedIn? Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

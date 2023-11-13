import React, { useRef, useState } from "react";
import styles from "../../../styles/authentication/LoginPage.module.css";
import LoginPageNavList from "./LoginPageNavList";
import { useNavigate } from "react-router-dom";
import { getEmailRegEx, getPassWordRegEx } from "../../../utils/getRegEx";
import {
  getEmailErrorMessage,
  getPassWordErrorMessage,
} from "../../../utils/getErrorMessages";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [eMailErrorMessage, seteMailErrorMessage] = useState("");
  const [passWordErrorMessage, setPassWordErrorMessage] = useState("");

  const eMailRef = useRef();
  const passWordRef = useRef();
  const passWordSectionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: eMailValue } = eMailRef.current;
    const { value: passWordValue } = passWordRef.current;
    const eMailRegEx = getEmailRegEx();
    const passWordRegEx = getPassWordRegEx();

    if (!eMailRegEx.test(eMailValue)) {
      seteMailErrorMessage(getEmailErrorMessage());
    } else {
      seteMailErrorMessage("");
      if (!passWordRegEx.test(passWordValue)) {
        setPassWordErrorMessage(getPassWordErrorMessage());
      } else {
        setPassWordErrorMessage("");
        loginApiCall();
      }
    }

    const loginApiCall = () => {
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
      <LoginPageNavList />
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
              {showPassword ? "Show" : "Hide"}
            </button>
          </section>
          <p className={styles.errorMessage}>{passWordErrorMessage}</p>
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

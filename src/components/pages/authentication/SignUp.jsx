import React from "react";
import styles from "../../../styles/SignUpPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ButtonLoader from "../../loader/ButtonLoader";

const SignUp = () => {
  const navigate = useNavigate();

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [eMailErrorMessage, seteMailErrorMessage] = useState("");
  const [passWordErrorMessage, setPassWordErrorMessage] = useState("");
  const [emptyFieldsCheck, setEmptyFieldsCheck] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [validUserName, setValidUserName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const userNameRef = useRef();
  const eMailRef = useRef();
  const passWordRef = useRef();
  const passWordSectionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: userNameValue } = userNameRef.current;
    const { value: eMailValue } = eMailRef.current;
    const { value: passWordValue } = passWordRef.current;
    const userNameRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
    const eMailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passWordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // console.log(passWordValue.length, typeof passWordValue.lenghth,passWordRef);

    if (eMailValue === "" || passWordValue === "" || userNameValue === "") {
      setEmptyFieldsCheck("Input fields cannot be Empty!");
      if (userNameValue === "") {
        userNameRef.current.style.border = "1px solid red";
      } else {
        userNameRef.current.style.border = "1px solid green";
      }
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

      if (!userNameRegEx.test(userNameValue)) {
        setUserNameErrorMessage(
          "User name must be atleast 6 characters long, both letters and numbers combined and Strictly no special characters!"
        );
        userNameRef.current.style.border = "1px solid red";
        setValidUserName(false);
      } else {
        setUserNameErrorMessage("");
        userNameRef.current.style.border = "1px solid green";
        setValidUserName(true);
      }

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

    if (validUserName && validEmail && validPassword) {
      setIsLoading(true)
      fetch("https://academics.newtonschool.co/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
        body: JSON.stringify({
          name: userNameValue,
          email: eMailValue,
          password: passWordValue,
          appType: "linkedin",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false)
          alert(data.message);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handlePasswordCheck = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const footerLinks = [
    "About",
    "Accessibility",
    "User Agreement",
    "Privacy Policy",
    "Cookie Policy",
    "Copyright Policy",
    "Brand Policy",
    "Guest Controls",
    "Community Guidelines",
  ];

  return (
    <div className={styles.signUpPage}>
      <div className={styles.headerContainer}>
        <h1 onClick={() => navigate("/home")}>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </h1>
      </div>
      <div className={styles.signUpFormContainer}>
        <h1>Join LinkedIn to find the right job</h1>
        <form>
          <label htmlFor="userName">User name</label>
          <input type="text" name="userName" id="userName" ref={userNameRef} />
          <p className={styles.error}>{userNameErrorMessage}</p>
          <label htmlFor="mailOrPhone">Email or phone number</label>
          <input
            type="text"
            name="mailOrPhone"
            id="mailOrPhone"
            ref={eMailRef}
          />
          <p className={styles.error}>{eMailErrorMessage}</p>
          <label htmlFor="passWord">Password(6+ characters)</label>
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
          <p className={styles.error}>{passWordErrorMessage}</p>
          <p className={styles.error}>{emptyFieldsCheck}</p>
          <p className={styles.termsAndConditions}>
            By clicking Agree & Join, you agree to the LinkedIn
            <a href="">User Agreement</a>,<a href="">Privacy Policy</a>and
            <a href="">Cookie Policy</a>.
          </p>
          <section className={styles.buttons}>
            {isLoading?<ButtonLoader/>:<button onClick={handleSubmit}>Agree & Join</button>}
            <section className={styles.or}>
              <span></span>
              <p>or</p>
              <span></span>
            </section>
            <p className={styles.signInLink}>
              Already on LinkedIn?<Link to="/login">Sign In</Link>
            </p>
          </section>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>
          Linked
          <FontAwesomeIcon icon={faLinkedin} />
        </p>
        <p>&copy; 2023</p>
        {footerLinks.map((link, i) => {
          return (
            <a href="#" key={i}>
              {link}
            </a>
          );
        })}
        <select>
          <option value="Language">Language</option>
        </select>
      </footer>
    </div>
  );
};

export default SignUp;

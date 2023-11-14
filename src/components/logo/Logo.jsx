import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <Link to={"/home"}>
    <FontAwesomeIcon
      icon={faLinkedin}
      style={{ color: "#fff", height: "2.5rem" }}
    />
    </Link>
  );
};

export default Logo;

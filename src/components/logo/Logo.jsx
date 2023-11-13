import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <FontAwesomeIcon
      icon={faLinkedin}
      style={{ color: "#fff", height: "2.5rem" }}
      onClick={() => {
        navigate("/home");
      }}
    />
  );
};

export default Logo;

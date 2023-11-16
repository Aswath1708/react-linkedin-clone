import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/home/PremiumCard.module.css";
import { AuthContext } from "../../App";
import ProfilePicture from "../Account/ProfilePicture";

const PremiumCard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className={styles.premiumCard} onClick={() => navigate("/premium")}>
      <div className={styles.adOptions}>
        <p>Ad</p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <p>{userInfo&&userInfo.name}, unlock your full potential with LinkedIn Premium</p>
      <div className={styles.images}>
        <ProfilePicture/>
        <img
          src="https://images.squarespace-cdn.com/content/v1/604a3fb3c1624d741254e718/4f11780b-a1f3-4e7d-b9f3-99f296f418d4/Linkedin+premium.png"
          alt="ad-card-icon"
        />
      </div>
      <p>See who's viewed your profile in the last 90 days</p>
      <button onClick={() => navigate("/premium")}>Try for Free</button>
    </div>
  );
};

export default PremiumCard;

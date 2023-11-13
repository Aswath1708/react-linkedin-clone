import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/home/PremiumCard.module.css";

const PremiumCard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.premiumCard} onClick={() => navigate("/premium")}>
      <div className={styles.adOptions}>
        <p>Ad</p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <p>Aswath, unlock your full potential with LinkedIn Premium</p>
      <div className={styles.images}>
        <img
          src="https://media.licdn.com/dms/image/D5603AQGD4oDqrW0sWg/profile-displayphoto-shrink_800_800/0/1673551963869?e=2147483647&v=beta&t=x2pVBajKEYZrUskwPI4oQxXBOWz1mZ2k6j6JhYn1Fo4"
          alt="ad-card-image"
        />
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

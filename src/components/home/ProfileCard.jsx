import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import styles from "../../styles/home/ProfileCard.module.css";

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <img
        src="https://www.westend61.de/images/0001396976pw/high-angle-view-of-coffee-cup-with-laptop-on-white-background-EYF05772.jpg"
        alt="cover-image"
      />
      <FontAwesomeIcon icon={faUser} className={styles.profileCardProfile} />
      <Link className={styles.profileCardName} to={"account"}>
        Aswath Sethuramalingam
      </Link>
      <div className={styles.profileCardSkills}>
        JAVA | Data Structures | HTML | CSS | Bootstrap | JavaScript | Git
      </div>
      <div className={styles.profileStats}>
        <p>
          Profile viewers<span>18</span>
        </p>
        <p>
          Post impressions<span>8</span>
        </p>
      </div>
      <div className={styles.profileCardPremiumLink}>
        Access exclusive tools & insights
        <div>
          <FontAwesomeIcon icon={faSquare} />
          <a href="#">Try Premium for free</a>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faBookmark} />
        My items
      </div>
    </div>
  );
};

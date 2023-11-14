import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../../styles/home/ProfileCard.module.css";
import { getSkills } from "../../utils/getSkills";
import { useContext } from "react";
import { AuthContext } from "../../App";

export const ProfileCard = () => {
  const skills = getSkills();
  const {userInfo} = useContext(AuthContext);
  return (
    <div className={styles.profileCard}>
      <img
        src="https://www.westend61.de/images/0001396976pw/high-angle-view-of-coffee-cup-with-laptop-on-white-background-EYF05772.jpg"
        alt="cover-image"
      />
      <FontAwesomeIcon icon={faUser} className={styles.profileCardProfile} />
      <Link className={styles.profileCardName} to={"account"}>
        {userInfo.name}
      </Link>
      <div className={styles.profileCardSkills}>
        {skills.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
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
          <Link to={"/premium"}>Try Premium for free</Link>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faBookmark} />
        My items
      </div>
    </div>
  );
};

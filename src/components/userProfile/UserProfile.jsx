import React, { useState } from "react";
import styles from "../../styles/home/UserProfile.module.css";
import ProfilePicture from "../Account/ProfilePicture";
import { getSkills } from "../../utils/getSkills";
import {
  faLock,
  faUserCheck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import collegeLogo from "../../assets/collegeLogo/college-logo.jfif";

const UserProfile = () => {
  const skills = getSkills();
  const [connected, setConnected] = useState(false);

  const followerInfo = JSON.parse(localStorage.getItem("followerInfo"));

  return (
    <div className={styles.accountProfileCard} style={{ marginTop: "5rem" }}>
      <div className={styles.profilePicContainer}>
        <ProfilePicture />
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2 className={styles.name}>{followerInfo.author.name}</h2>
          <p className={styles.skills}>
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </p>
          <p className={styles.address}>
            Thanjavur, Tamil Nadu, India .
            <span>Contact info</span>
          </p>
          <div className={styles.followersAndConnections}>
            <p>76 followers</p>.<p>{connected ? 60 : 59} connections</p>
          </div>
        </div>
        <div className={styles.collegeContainer}>
          <div>
            <img src={collegeLogo} alt="college-logo-img" />
          </div>
          <p>{followerInfo.channel.name}</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={() => setConnected(!connected)}>
          <FontAwesomeIcon icon={connected ? faUserCheck : faUserPlus} />
          {connected ? "Connection" : "Connect"}
        </button>
        <button>
          <FontAwesomeIcon icon={faLock} />
          Message
        </button>
        <button>More</button>
      </div>
    </div>
  );
};

export default UserProfile;

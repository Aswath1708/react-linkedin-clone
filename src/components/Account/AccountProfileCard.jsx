import React, { useContext } from "react";
import { getSkills } from "../../utils/getSkills";
import styles from "../../styles/accountprofile/AccountProfileCard.module.css";
import ProfilePicture from "./ProfilePicture";
import { getLoggedUserProfileData } from "../../utils/getProfileData";

const AccountProfileCard = () => {
  const { skills, address, followers, connections, collegeLogo, collegeName } =
    getLoggedUserProfileData();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className={styles.accountProfileCard}>
      <div className={styles.profilePicContainer}>
        <ProfilePicture />
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2>{userInfo && userInfo.name}</h2>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
          <p className={styles.address}>
            {address}
            <span>Contact info</span>
          </p>
          <div className={styles.followersAndConnections}>
            <p>{followers} followers</p>.<p>{connections} connections</p>
          </div>
        </div>
        <div className={styles.collegeContainer}>
          <div>
            <img src={collegeLogo} alt="college-logo-img" />
          </div>
          <p>{collegeName}</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button>I want to...</button>
        <button>Add profile section</button>
        <button>More</button>
      </div>
    </div>
  );
};

export default AccountProfileCard;

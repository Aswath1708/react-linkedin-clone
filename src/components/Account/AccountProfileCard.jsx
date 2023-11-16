import React, { useContext } from "react";
import { getSkills } from "../../utils/getSkills";
import styles from "../../styles/accountprofile/AccountProfileCard.module.css";
import ProfilePicture from "./ProfilePicture";

const AccountProfileCard = () => {
  const skills = getSkills();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className={styles.accountProfileCard}>
      <div className={styles.profilePicContainer}>
        <ProfilePicture/>
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2 className={styles.name}>{userInfo&&userInfo.name}</h2>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
          <p className={styles.address}>
            Thanjavur, Tamil Nadu, India .
            <span className={styles.contactInfo}>Contact info</span>
          </p>
          <div className={styles.followersAndConnections}>
            <p>76 followers</p>.<p>59 connections</p>
          </div>
        </div>
        <div className={styles.collegeContainer}>
          <div className={styles.imageContainer}>
            <img
              src="https://media.licdn.com/dms/image/C560BAQE0PmVgJqVLTA/company-logo_100_100/0/1616863616991?e=1705536000&v=beta&t=vuTls7gORn4jUCOMQV0RHeWEAmYwLWPb7gE2fcdA1Pg"
              alt="college-logo-img"
            />
          </div>
          <p>THANTHAI PERIYAR GOVERNMENT INSTITUTE OF TECHNOLOGY</p>
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

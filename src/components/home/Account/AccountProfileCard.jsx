import React from "react";
import { getSkills } from "../../../utils/getSkills";
import styles from "../../../styles/accountprofile/AccountProfileCard.module.css";

const AccountProfileCard = () => {
  const skills = getSkills();
  return (
    <div className={styles.accountProfileCard}>
      <div className={styles.profilePicContainer}>
        <img
          src="https://media.licdn.com/dms/image/D5603AQGD4oDqrW0sWg/profile-displayphoto-shrink_400_400/0/1673551963869?e=1701907200&v=beta&t=6b8HAUY-s3JeYOinMYPTBOi5rY8N1_rY46SS3M00U2c"
          alt="profile-image"
        />
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2 className={styles.name}>Aswath Sethuramalingam</h2>
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

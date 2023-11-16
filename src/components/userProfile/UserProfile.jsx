import React, { useEffect } from "react";
import styles from "../../styles/accountprofile/AccountProfileCard.module.css";
import { useParams } from "react-router-dom";
import ProfilePicture from "../Account/ProfilePicture";
import axios from "axios";
import { getProjectID } from "../../utils/getProjectID";
import { getSkills } from "../../utils/getSkills";

const UserProfile = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("jwtToken"));
  const skills = getSkills();
  console.log(token);

  useEffect(() => {
    axios.get(`https://academics.newtonschool.co/api/v1/linkedin/user/${id}`, {
      headers: {
        Authorization:`Bearer ${token}`,
        projectID: `${getProjectID()}`,
      },
    }).then((res)=>console.log(res.data)).catch(err=>console.log(err))
  }, []);

  return (
    <div className={styles.accountProfileCard}>
      <div className={styles.coverPicContainer}>
        <img
          src="https://media.licdn.com/dms/image/D5616AQGOx345bn0xdA/profile-displaybackgroundimage-shrink_350_1400/0/1673551876072?e=1701907200&v=beta&t=ybvDrT22ExMTyU8cez-bDnIeFdpxw4uU6ytbwQvjV5k"
          alt="cover-image"
        />
      </div>
      <div className={styles.profilePicContainer}>
        <ProfilePicture />
      </div>
      <div className={styles.personalInformationContainer}>
        <div>
          <h2 className="name">{id}</h2>
          <p className="skills">
            {skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </p>
          <p className="address">
            Thanjavur, Tamil Nadu, India .
            <span className="contact-info">Contact info</span>
          </p>
          <div className="followers-and-connections">
            <p className="followers">76 followers</p>.
            <p className="connections">59 connections</p>
          </div>
        </div>
        <div className="college-container">
          <div className="image-container">
            <img
              src="https://media.licdn.com/dms/image/C560BAQE0PmVgJqVLTA/company-logo_100_100/0/1616863616991?e=1705536000&v=beta&t=vuTls7gORn4jUCOMQV0RHeWEAmYwLWPb7gE2fcdA1Pg"
              alt="college-logo-img"
            />
          </div>
          <p>THANTHAI PERIYAR GOVERNMENT INSTITUTE OF TECHNOLOGY</p>
        </div>
      </div>
      <div className="buttons-container">
        <button>I want to...</button>
        <button>Add profile section</button>
        <button>More</button>
      </div>
    </div>
  );
};

export default UserProfile;

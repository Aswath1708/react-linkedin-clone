import React, { useEffect } from "react";
import styles from "../../../styles/home/UserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  const token = JSON.parse(localStorage.getItem("JWT"));
  console.log(token);

  useEffect(() => {
    fetch(`https://academics.newtonschool.co/api/v1/linkedin/user/${id}`, {
      headers: {
        Authorization: token,
        projectID: "f104bi07c490",
      },
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="account-profile-card">
      <div className="cover-pic-container">
        <img
          src="https://media.licdn.com/dms/image/D5616AQGOx345bn0xdA/profile-displaybackgroundimage-shrink_350_1400/0/1673551876072?e=1701907200&v=beta&t=ybvDrT22ExMTyU8cez-bDnIeFdpxw4uU6ytbwQvjV5k"
          alt="cover-image"
        />
      </div>
      <div className="profile-pic-container">
        <img
          src="https://media.licdn.com/dms/image/D5603AQGD4oDqrW0sWg/profile-displayphoto-shrink_400_400/0/1673551963869?e=1701907200&v=beta&t=6b8HAUY-s3JeYOinMYPTBOi5rY8N1_rY46SS3M00U2c"
          alt="profile-image"
        />
      </div>
      <div className="personal-information-container">
        <div>
          <h2 className="name">{id}</h2>
          <p className="skills">
            JAVA | Data Structures | HTML | CSS | Bootstrap | JavaScript | Git
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

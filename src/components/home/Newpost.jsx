import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/home/NewPost.module.css";
import ProfilePicture from "../Account/ProfilePicture";

export const Newpost = () => {
  return (
    <div className={styles.newPost}>
      <div className={styles.newPostInput}>
        <ProfilePicture/>
        <input
          type="text"
          name="newpost"
          id="newpost"
          placeholder="Start a post"
        />
      </div>
      <div className={styles.newPostOptions}>
        <div>
          <FontAwesomeIcon
            icon={faImage}
            flip="horizontal"
            style={{ color: "#70b5f9", fontSize: "1.25rem" }}
          />
          Media
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ color: "#e7a33e", fontSize: "1.25rem" }}
          />
          Event
        </div>
        <div>
          <FontAwesomeIcon
            icon={faNewspaper}
            style={{ color: "#f5987e", fontSize: "1.25rem" }}
          />
          Write articale
        </div>
      </div>
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faImage, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const Newpost = () => {
  return (
    <div className="newPost">
      <div className="newPost-input">
        <FontAwesomeIcon icon={faUser} className="newPost-profile" />
        <input
          type="text"
          name="newpost"
          id="newpost"
          placeholder="Start a post"
        />
      </div>
      <div className="newPost-options">
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

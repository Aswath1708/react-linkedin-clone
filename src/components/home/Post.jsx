import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faPaperPlane,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as SolidLikeBtn } from "../../assets/likeButton/SolidLikeBtn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Post = ({
  data: {
    _id,
    author: { name, profileImage },
    channel: { name: profession, image },
    commentCount,
    likeCount,
    content,
    title,
  },
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="post-card">
      <div className="profile-details">
        <div>
          <img
            src={profileImage}
            alt="profile-image"
            className="profile-image"
          />
          <div>
            <Link className="profile-card-userName" to={`/home/in/${_id}`}>
              {name}
            </Link>
            <p>{profession}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      <p className="post-content">{content}</p>
      <img src={image} alt="content-image" className="content-image" />
      <div className="content-below-post">
        <div className="likes-comments-count">
          <div>{likeCount} likes</div>
          <div>{commentCount} comments</div>
        </div>
        <div className="reaction-buttons">
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <SolidLikeBtn className="solid-like-btn" />
            ) : (
              <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" />
            )}
            Like
          </div>
          <div>
            <FontAwesomeIcon icon={faCommentDots} />
            Comment
          </div>
          <div>
            <FontAwesomeIcon icon={faRepeat} />
            Repost
          </div>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

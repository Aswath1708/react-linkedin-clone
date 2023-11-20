import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faPaperPlane,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as SolidLikeBtn } from "../../assets/likeButton/SolidLikeBtn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home/PostCard.module.css";
import {AuthContext} from '../../App'

export const Post = (props) => {

  const {darkTheme} = useContext(AuthContext);

  const {
    _id,
    author: { name, profileImage },
    channel: { name: profession, image },
    commentCount,
    likeCount,
    content,
  } = props;
  const [isLiked, setIsLiked] = useState(false);
  // useEffect(()=>{
  localStorage.setItem("followerInfo", JSON.stringify(props));
  // },[_id])

  return (
    <div className={styles.postCard} style={{backgroundColor:darkTheme?"#1b1f23":"#fff"}}>
      <div className={styles.profileDetails}>
        <div>
          <img src={profileImage} alt="profile-image" />
          <div>
            <Link to={`/home/in/${_id}`} style={{color:darkTheme?"#ddd":"#333"}}>{name}</Link>
            <p style={{color:darkTheme?"#ffffff99":"#000000"}}>{profession}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsis} style={{color:darkTheme?"#ddd":"#333"}}/>
      </div>

      <p style={{color:darkTheme?"#ffffff99":"#000000"}}>{content}</p>
      <img src={image} alt="content-image" />
      <div>
        <div className={styles.likesCommentsCount}>
          <div>{isLiked ? likeCount + 1 : likeCount} likes</div>
          <div>{commentCount} comments</div>
        </div>
        <div className={styles.reactionButtons}>
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <SolidLikeBtn className={styles.solidLikeBtn} />
            ) : (
              <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" />
            )}
            <span>Like</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Comment</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faRepeat} />
            <span>Repost</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

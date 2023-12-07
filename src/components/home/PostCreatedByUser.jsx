import React from 'react'
import ProfilePicture from '../Account/ProfilePicture'
import styles from '../../styles/posts/PostCreatedByUser.module.css'

const PostCreatedByUser = ({title,content,image}) => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
( <div className={styles.container}>
        <div className={styles.profileAndUserName}>
            <ProfilePicture/>
            <p>{userInfo.name}</p>
        </div>
        <div className={styles.titleAndContent}>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        <div className={styles.imageContainer}>
            <img src={image} alt="postedImage" />
        </div>
        <div className={styles.reactionButtons}>
            <p>Like</p>
            <p>Comment</p>
            <p>Repost</p>
            <p>Share</p>
        </div>
    </div>)
  )
}

export default PostCreatedByUser
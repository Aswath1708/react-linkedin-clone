import React from 'react'
import blankProfile from '../../assets/profilePicture/blank-profile-picture.webp'

const ProfilePicture = ({profileURL=blankProfile}) => {
  return (
    <div>
        <img src={profileURL} alt="profile-picture" />
    </div>
  )
}

export default ProfilePicture
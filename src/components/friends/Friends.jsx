import React from 'react'
import './friends.css'

const Friends = ({user}) => {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFrndImg" />
        <span className="sidebarFrndName">{user.username}</span>
    </li>
  )
}

export default Friends
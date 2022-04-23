import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import './topbar.css'
import profile from '../../assets/1.jpeg'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">SocialApp.</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='search-icon'/>
                <input placeholder='Serach a Post' className='searchInput'></input>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src={profile} alt="Hello" className="topbarImg" />
        </div>
        
    </div>
  )
}

export default Topbar
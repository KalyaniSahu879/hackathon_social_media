import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import './topbar.css'
import profile from '../../assets/1.jpeg'
import {Link} from 'react-router-dom'
import { AuthContext } from '../redux/AuthContext'

const Topbar = () => {
    const {user} = useContext(AuthContext);

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to='/' style = {{textDecoration:"none"}}>
                <span className="logo">SocialApp.</span>
            </Link>
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
            <Link to={`/profile/${user.username}`} >
            <img src={profile} alt="Hello" className="topbarImg" />
            </Link>
            
        </div>
        
    </div>
  )
}

export default Topbar
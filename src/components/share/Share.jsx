import React, { useContext, useRef, useState } from 'react'
import {PermMedia, Label , Room , EmojiEmotions, EmojiEmotionsOutlined} from '@mui/icons-material'
import './share.css'
import pic4 from '../../assets/4.jpeg'
import { AuthContext } from '../redux/AuthContext'
const Share = () => {
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const[file,setFile] = useState(null)
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={pic4} alt="" className="shareProfilePic" />
                <input type="text" ref = {desc} placeholder={'Whats in your mind '+user.username} className='shareInput' />
            </div>
            <hr className="shareHr"></hr>
            <form className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionTxt">Photo or Video</span>
                        <input type = 'file' id='file' accept='.png,.jpeg,.jpg' onClick={(e)=>setFile(e.target.files[0])}/ >
                    </label>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionTxt">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionTxt">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                        <span className="shareOptionTxt">Feelings</span>
                    </div>
                </div>
                <button className="sharebutton">Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share
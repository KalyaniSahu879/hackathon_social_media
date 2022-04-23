import React from 'react'
import {PermMedia, Label , Room , EmojiEmotions, EmojiEmotionsOutlined} from '@mui/icons-material'
import './share.css'
import pic4 from '../../assets/4.jpeg'
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={pic4} alt="" className="shareProfilePic" />
                <input type="text" placeholder='Whats in your mind...' className='shareInput' />
            </div>
            <hr className="shareHr"></hr>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionTxt">Photo or Video</span>
                    </div>
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
            </div>
        </div>
    </div>
  )
}

export default Share
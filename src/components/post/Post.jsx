import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import './post.css';
import heart from '../../assets/heart.png'
import likepic from '../../assets/like.png'
import {Users} from '../../dummyData'

import pic from '../../assets/5.jpeg'
import postpic from '../../assets/p5.jpeg'
const Post = ({post}) => {
    const user = Users.filter(u=>u.id==1)
    console.log(user);
    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false)

    const likeHandler = ()=>{
        setLike(isLike?like-1 : like+1);
        setIsLike(!isLike);
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className='postUserName'>{Users.filter((u)=> u.id === post?.userId)[0].username}</span>
                    <span className='postDt'>{post.date}</span>

                </div>
                <div className="topRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postPic" />
            </div>
            <div className="postBtm">
                <div className="btmLeft">
                    <img src={likepic}  alt="" className='likeIcon' onClick={likeHandler}/>
                    <img src={heart}  alt="" className='likeIcon' onClick={likeHandler}/>
                    <span className="likeCounter">{like} people liked it</span>
                </div>
                
                <div className="btmRight">
                    <span className="postCmntTxt">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import { AuthContext } from '../redux/AuthContext'
//import {posts} from '../../dummyData'

const Feed = ({username}) => {
  const [post , setPost] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    const fetchPosts = async () => {
      const res= username ? await axios.get("https://hackthon-backend-soc.herokuapp.com/api/posts/profile/" + username) :
      await axios.get("https://hackthon-backend-soc.herokuapp.com/api/posts/timeline/" + user._id)
      console.log("res" , res)
      setPost(res.data);
    }
    fetchPosts();
    },[username, user._id])
    
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {post.map(elem =>
          <Post key = {elem._id} post={elem}/>
        )}
      </div>
    </div>
  )
}

export default Feed
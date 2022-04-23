import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {posts} from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(elem =>
          <Post key = {elem.id} post={elem}/>
        )}
      </div>
    </div>
  )
}

export default Feed
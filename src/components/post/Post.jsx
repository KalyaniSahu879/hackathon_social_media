import { MoreVert } from "@mui/icons-material";
import React, { useState, useEffect, useContext } from "react";
import "./post.css";
import heart from "../../assets/heart.png";
import likepic from "../../assets/like.png";
import { Users } from "../../dummyData";
import axios from "axios";
import mopp from "../../assets/1.jpeg";
import dummyphoto from "../../assets/p1.jpeg";
import { format } from "timeago.js";

import pic from "../../assets/5.jpeg";
import postpic from "../../assets/p5.jpeg";
import { Link } from "react-router-dom";
import { AuthContext } from "../redux/AuthContext";
const Post = ({ post }) => {
  console.log(post);
  //const user = Users.filter(u=>u.id==1)
  //console.log(user);
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(
          `https://hackthon-backend-soc.herokuapp.com/api/users?userId=${post.userId}`
        )
        .then((res) => {
          console.log("users", res);
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      console.log("currentUser._id", currentUser._id, "postid", post._id);
      await axios.put(
        "https://hackthon-backend-soc.herokuapp.com/api/posts/" +
          post._id +
          "/like",
        { userId: currentUser._id }
      );
    } catch (err) {
      console.log(err);
    }
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || mopp}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDt">{format(post.createdAt)}</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.img} alt="" className="postPic" />
        </div>
        <div className="postBtm">
          <div className="btmLeft">
            <img
              src={likepic}
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src={heart}
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="likeCounter">{like} people liked it</span>
          </div>

          <div className="btmRight">
            <span className="postCmntTxt">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

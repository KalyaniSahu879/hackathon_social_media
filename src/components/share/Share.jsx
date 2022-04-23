import React, { useContext, useRef, useState } from "react";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import "./share.css";
import pic4 from "../../assets/4.jpeg";
import { AuthContext } from "../redux/AuthContext";
import axios from "axios";
const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;
      console.log("newPost", data);
      try {
        await axios
          .post("https://hackthon-backend-soc.herokuapp.com/api/upload", data)
          .then((res) => {
            console.log("upload");
          });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(
        "https://hackthon-backend-soc.herokuapp.com/api/posts",
        newPost
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={pic4} alt="" className="shareProfilePic" />
          <input
            type="text"
            ref={desc}
            placeholder={"Whats in your mind " + user.username}
            className="shareInput"
          />
        </div>
        <hr className="shareHr"></hr>
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionTxt">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionTxt">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionTxt">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptionTxt">Feelings</span>
            </div>
          </div>
          <button className="sharebutton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;

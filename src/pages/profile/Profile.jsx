import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import coverPage from "../../assets/p3.jpeg";
import pp from "../../assets/3.jpeg";
import dummyCover from "../../assets/p8.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  let { username } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(
          `https://hackthon-backend-soc.herokuapp.com/api/users?username=${username}`
        )
        .then((res) => {
          console.log("users", res);
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || dummyCover}
                alt="cover picture"
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || dummyCover}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

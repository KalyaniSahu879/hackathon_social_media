import "./rightbar.css";
// import { Users } from "../../dummyData";
import Online from "../online/Online";
import gift from "../../assets/gift.png";
import add from "../../assets/ad.png";
import pic1 from "../../assets/1.jpeg";
import pic2 from "../../assets/7.jpeg";
import pic3 from "../../assets/3.jpeg";
import pic4 from "../../assets/4.jpeg";
import pic5 from "../../assets/5.jpeg";
import pic6 from "../../assets/8.jpeg";
import { Add, Remove } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../redux/AuthContext";
import { Link } from "react-router-dom";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    //console.log("dtails-use --before", user.username);
    if (user?._id) {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(
            "https://hackthon-backend-soc.herokuapp.com/api/users/friends/" +
              user._id
          );
          console.log("fetch", friendList);
          setFriends(friendList.data);
        } catch (err) {
          console.log(err);
        }
      };
      getFriends();
      console.log("after");
    }
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          `https://hackthon-backend-soc.herokuapp.com/api/users/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          `https://hackthon-backend-soc.herokuapp.com/api/users/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={pic3} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "unfollow" : "follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 ? "Single" : "Married"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => {
            return (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className="rightbarFollowing">
                  <img
                    src={friend.profilePicture ? pic1 : pic5}
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">
                    {friend.username}
                  </span>
                </div>
              </Link>
            );
          })}
          {/* <div className="rightbarFollowing">
            <img
              src={pic2}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={pic3}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={pic4}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={pic5}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={pic6}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div> */}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

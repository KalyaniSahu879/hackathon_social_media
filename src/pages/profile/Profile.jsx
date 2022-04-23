import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import coverPage from '../../assets/p3.jpeg'
import pp from '../../assets/3.jpeg'

export default function Profile() {
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
                src={coverPage}
                alt=""
              />
              <img
                className="profileUserImg"
                src={pp}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
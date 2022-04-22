import "./chatOnline.css";

export default function ChatOnline() {

  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              
              src="https://media.istockphoto.com/photos/smiling-young-girl-picture-id904234860?b=1&k=20&m=904234860&s=170667a&w=0&h=lPqaDjt-JpDeN4oEn9zqUpAippCilY9yZtxe1RNdTm0="
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Bhavani</span>
        </div>
        
    </div>
  );
}
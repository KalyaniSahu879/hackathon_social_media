import axios from "axios";
import { useRef } from "react";
import {useNavigate}  from 'react-router-dom'
import "./register.css";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) =>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity('Passwords dont match')
    }else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      }
      try{
       await axios.post('https://hackthon-backend-soc.herokuapp.com/api/auth/register',user)
       navigate('/login')
      }catch(err){
        console.log(err)
      }
    }
  }
  

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp.</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialApp.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" type="password" required ref={password} className="loginInput" minLength='6' />
            <input placeholder="Password Again"  type="password"  required ref= {passwordAgain} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
//{isFetching ? (<CircularProgress color="white" size='20px'/>) : "Create a New Account"}import "./login.css";
import { loginCall } from "../../apicalls";
import { useContext, useRef } from "react";
//import { CircularProgress } from '@mui/material'
import { AuthContext } from "../../components/redux/AuthContext";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching,error,dispatch}=useContext(AuthContext)
  function handleSubmit(e){
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch)
    console.log(email.current.value,password.current.value)

  } 
  console.log(user)
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Email" className="loginInput" type='email' required ref={email}/>
            <input placeholder="Password" minLength='6' className="loginInput" type='password' required ref={password}/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton"> Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
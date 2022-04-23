import Home from "./pages/home/Home";
import {Person} from '@mui/icons-material'
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Routes , Route , Navigate} from 'react-router-dom';
import {AuthContext} from './components/redux/AuthContext'
import { useContext } from "react";


function App() {
  const {user} = useContext(AuthContext);
  
  return (
      <Routes>

      <Route exact path="/" element = {user ? <Home/>:<Register/>} />
      <Route exact path="/login" element = {user ? <Navigate to = '/'/> : <Login/> } />
      <Route exact path="/register" element = {user ? <Navigate to = '/'/> : <Register/>} />
      <Route exact path="/profile/:username" element = {<Profile/>} />
      
        
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route > */}
      </Routes>
    
    
    
  );
}

export default App;

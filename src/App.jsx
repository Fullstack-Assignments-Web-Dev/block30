import { Routes, Route } from "react-router-dom";
import HeaderNav from './components/HeaderNav.jsx';
import Posts from './components/Posts.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { useState } from "react";
import './App.css';

function App() {
  const [token, setToken] = useState(null)


  return (
    <>  
      <HeaderNav />
      
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
    </Routes>

    </>
  )
}

export default App

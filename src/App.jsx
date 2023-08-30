import { Routes, Route } from "react-router-dom";

import HeaderNav from './components/HeaderNav.jsx';
import Posts from './components/Posts.jsx';
import Profile from './components/Profile.jsx';
import LoginRegister from './components/LoginRegister.jsx';

import './App.css';

function App() {
  
  return (
    <>  
      <HeaderNav />
      
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/loginregister" element={<LoginRegister />} />
    </Routes>

    </>
  )
}

export default App

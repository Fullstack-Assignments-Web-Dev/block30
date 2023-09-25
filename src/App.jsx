import Home from './components/Home.jsx'
import Posts from './components/Posts.jsx'
import Profile from './components/Profile.jsx'
import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom' 
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx'
import { useEffect, useState } from 'react'
import { isLoggedIn } from './components/AuthHelper.jsx'

function App() {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  useEffect(() => {
    const checkAuthentication = () => {
      setAuthenticated(isLoggedIn());
    };
    window.addEventListener("authChange", checkAuthentication);
    return () => {
      window.removeEventListener('authChange', checkAuthentication);
    };
  }, []);

  return (
    <>
    <div id="container">
   
      <div id="navbar">
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated}  />
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App

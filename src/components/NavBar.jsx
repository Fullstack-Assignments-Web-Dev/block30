import '../App.css'
import logo from '../assets/Stranger-800.png'
import { Link } from 'react-router-dom'
import { isLoggedIn } from './AuthHelper'
import LogoutBtn from './buttons/LogoutBtn'


export default function NavBar() {
    return (
        <>
            <div className="header">
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" height="75px" />
                </div>
                
              
                <div className="navbar-links">
                    <Link className="navbar-link" to="/">Home</Link>
                 
                    <Link className="navbar-link" to="/posts">Posts</Link>

        { isLoggedIn() ? (
            <>
            <Link className="navbar-link" to="/profile">Profile</Link>
            <LogoutBtn />
            </>
        ) : (
            <>
            <Link className="navbar-link" to="/login">Log In</Link>
            <Link className="navbar-link" to="/register">Register</Link>
        </>
        )        
                    
        }
                    
                    
                  
                </div>

                </div>
            </div>
        </>
    )

}
import '../App.css'
import logo from '../assets/Stranger-800.png'
import { Link } from 'react-router-dom'


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
                    <Link className="navbar-link" to="/profile">Profile</Link>
                    <Link className="navbar-link" to="/register">Register</Link>
                    <Link className="navbar-link" to="/login">Log In</Link>
                    <button className="navbar-link logout-button">Log Out</button>
                </div>

                </div>
            </div>
        </>
    )

}
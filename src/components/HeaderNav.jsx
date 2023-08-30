import { Link } from "react-router-dom";
import '../App.css'

function HeaderNav() {

  return (
    <>
      <div className="main-section">
      <h1>Stranger Things</h1>
<Link to ="/profile" className="menuItem">Profile</Link>
<Link to ="/loginregister" className="menuItem">Login</Link>
<Link to ="/loginregister" className="menuItem">Register</Link>
<Link to ="/posts" className="menuItem">Posts</Link>
</div>
<div>

    </div>
    </>
  )
}

export default HeaderNav
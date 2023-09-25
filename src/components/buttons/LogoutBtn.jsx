import { logOut } from '../AuthHelper';
import { useNavigate } from 'react-router-dom';

export default function LogoutBtn() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/', { replace: true });
    }

    return (
        <button className="navbar-link logout-button" onClick={handleLogout}>Logout</button>
    )
}
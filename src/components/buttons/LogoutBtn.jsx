import '../App.css'

export default function LogoutBtn(props) {
    return (
        <button className="logout-btn" onClick={props.onClick}>Logout</button>
    )
}
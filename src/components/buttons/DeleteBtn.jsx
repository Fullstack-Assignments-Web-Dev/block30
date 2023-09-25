import '../App.css'

export default function DeleteBtn(props) {
    return (
        <button className="delete-btn" onClick={props.onClick}>Delete</button>
    )
}
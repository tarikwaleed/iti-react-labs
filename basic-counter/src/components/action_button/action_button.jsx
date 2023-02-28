import './action_button.css'
const ActionButton = (props) => {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.backgroundColor }} className="ActionButton">
            {props.sign}
        </button>
    )
}
export default ActionButton
import './display_area.css'
const DisplayArea = (props) => {
    return (
        <div className="DisplayArea">
            {props.text}
        </div>
    )
}
export default DisplayArea
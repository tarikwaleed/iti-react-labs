import './wrapper.css'
import '../display_area/display_area'
import ActionButton from '../action_button/action_button'
import DisplayArea from '../display_area/display_area'
import { useState } from 'react'
const Wrapper = () => {
    let [counter, setCounter] = useState(0)
    const add = () => {
        // setCounter(count=>count+1)
        setCounter(counter + 1)
    }
    const subtract = () => {
        // setCounter(count=>count-1)
        if (counter > 0) {
            setCounter(counter - 1)

        }

    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <div className='Wrapper'>
            <div className="Card">
                <DisplayArea text={counter}></DisplayArea>
                <div className="ActionButtons">
                    <ActionButton sign='+' backgroundColor='green' onClick={add}></ActionButton>
                    <ActionButton sign='0' backgroundColor='blue' onClick={reset}></ActionButton>
                    <ActionButton sign='-' backgroundColor='red' onClick={subtract}></ActionButton>

                </div>
            </div>
        </div>
    )
}
export default Wrapper
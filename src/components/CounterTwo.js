import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, firstCounter: state.firstCounter + 1}
        case "decrement":
            return {...state, firstCounter: state.firstCounter - 1}
        case "increment 5":
            return {...state, firstCounter: state.firstCounter + 5}
        case "decrement 5":
            return {...state, firstCounter: state.firstCounter - 5}
        case "increment 2":
            return {...state, secondCounter: state.secondCounter + 1}
        case "decrement 2":
            return {...state, secondCounter: state.secondCounter - 1}
        case "reset":
            return initialState    
        default:
            return state
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                First Counter - {count.firstCounter}
            </div>
            <div>
                Second Counter - {count.secondCounter}
            </div>            
            <button onClick={() => dispatch({type: "increment" })} >Increment</button>
            <button onClick={() => dispatch({type: "decrement" })} >Decrement</button>
            <button onClick={() => dispatch({type: "increment 5" })} >Increment</button>
            <button onClick={() => dispatch({type: "decrement 5" })} >Decrement</button>
            <div>
            <button onClick={() => dispatch({type: "increment 2" })} >Increment CounterTwo</button>
            <button onClick={() => dispatch({type: "decrement 2" })} >Decrement CounterTwo</button>
            </div>
            <button onClick={() => dispatch({type:"reset"}) }>Reset</button>
        </div>
    )
}

export default CounterTwo

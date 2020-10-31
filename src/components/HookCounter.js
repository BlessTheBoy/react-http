import React, {useState, useEffect} from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Updating document title")
        document.title = `Clicked ${count} times`
    }, [count])

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)       
        }
    }

    return (
        <div>
            <input type="text" value= {name} onChange= {e => setName(e.target.value)} />
            count : {count}
            <button onClick={() => setCount(initialCount)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementFive} >Increment 5</button>
        </div>
    )
}

export default HookCounter

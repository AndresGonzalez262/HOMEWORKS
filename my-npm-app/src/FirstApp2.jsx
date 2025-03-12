import {useState} from "react"

// Challenge 3

const FirstApp2 = ({value}) => {

    const [counter, setCounter] = useState (value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return(
        <>
        <div>
            <h1>Suma</h1>
            <span>{counter}</span>
            <br></br>
            <button onClick={() => handleAdd()}>+1</button>
        </div>

        <div>
            <h2>Resta</h2>
            <span>{counter}</span>
            <br></br>
            <button onClick={() => handleSubstract()}>-1</button>
        </div>

        <div>
            <h3>Reset</h3>
            <span>{counter}</span>
            <br></br>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
        </>
    )

} 

export default FirstApp2
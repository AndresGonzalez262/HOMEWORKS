import './App.css'
import React from 'react'

// Challenge 4

const Child = ({category, handleInputChange, handleReset, addCategory}) => {

    return (
        <div>
            <input 
            type = "text"
            value = {category}
            onChange = {handleInputChange}
            placeholder = "Enter Category"
            />

            <button onClick = {addCategory}>Add Category</button>
            <button onClick = {()=>handleReset()}>Reset Category</button>
            
        </div>
    )
}

export default Child
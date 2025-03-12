import './App.css'
import React, { useState } from 'react'
import Child from './Child'

// Challenge 4

const Parent = () => {

    const [Category, setCategory] = useState("");
    const [Categories, setCategories] = useState([]);

    const handleInputChange = (event) =>{
        setCategory(event.target.value)
    }

    const handleReset = () => {
        setCategory("")
        setCategories([])
    }

    const addCategory = () => {
        if(Category.trim() !== ""){
            setCategories([...Categories,Category])
            setCategory("")
        }
    }

    return <div>
        <h2>Category Manager</h2>
        <Child Category = {Category}
               handleInputChange = {handleInputChange}
               handleReset = {handleReset}
               addCategory = {addCategory}
        />

        <ul>
            {Categories.map((cat, idx) =>(
                <li key={idx}>{cat}</li>
            ))}
        </ul>         
    </div>
}

export default Parent
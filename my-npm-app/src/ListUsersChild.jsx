import './App.css'
import React from 'react'

const ListUsersChild = ({handleInputChange, addUsers, usuarios}) => {

    return (
        <div>
            <input 
            type = "text"
            value = {usuarios}
            onChange = {handleInputChange}
            placeholder = "Enter Usuers"
            />

            <button onClick = {addUsers}>Add Users</button>
            
        </div>
    )
}

export default ListUsersChild

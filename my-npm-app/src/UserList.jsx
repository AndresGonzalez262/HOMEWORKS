import './App.css'
import { useState } from 'react'
import React from 'react'
import ListUsersChild from './ListUsersChild'

const UserList = () => {
    const [usuarios, setUsuarios] = useState("");
    const[users, setUsers] = useState([])

    const handleInputChange = (event) =>{
        setUsuarios(event.target.value)
    }

    const addUsers = () => {
        if(usuarios.trim() !== ""){
            setUsers([...usuarios, users])
            setUsuarios("")
        }
    }

return (
    <div>
        <h2>Lista de Usuarios</h2>

        <ListUsersChild usuarios = {usuarios}
                       handleInputChange = {handleInputChange}
                       addUsers = {addUsers}
        />

        {/**(Esto es un comentario) */}

        {
            users.length === 0?
            (
                <p>No hay usuarios registrados.</p>
            )
            :
            (
                <ul>
                    {
                    users.map((users, idx) => (
                        <li key={idx}>{users.name}</li>
                    
                    )) 
                }
                </ul>
            )
        }

        
        <button onClick={()=>setUsers([])}>Vaciar lista.</button>
        
    </div>
)
}

export default UserList
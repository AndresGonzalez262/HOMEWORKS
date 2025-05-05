import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listenMessages, sendMessage } from '../firebase/firebaseSlice'

const Messages = () => {
  
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.firebase.messages)
  const [input, setInput] = useState('')

  useEffect(() => {
    dispatch(listenMessages())
  }, [dispatch])

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input))
      setInput('')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Mensajes en tiempo real</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button onClick={handleSend}>Enviar</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '5px 0' }}>
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages

import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store' 
import Messages from './components/Messages'

function App() {
  return (
    <Provider store={store}>
      <Messages />
    </Provider>
  )
}

export default App

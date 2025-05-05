import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { push, ref, onValue } from 'firebase/database'

export const sendMessage = createAsyncThunk(
  'firebase/sendMessage',
  async (messageText, { extra: { db } }) => {
    const messageRef = ref(db, 'messages')
    await push(messageRef, {
      text: messageText,
      timestamp: Date.now(),
    })
  }
)

export const listenMessages = createAsyncThunk(
  'firebase/listenMessages',
  async (_, { extra: { db }, dispatch }) => {
    const messageRef = ref(db, 'messages')
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val()
      const messageList = data
        ? Object.entries(data).map(([id, msg]) => ({ id, ...msg }))
        : []
      dispatch(setMessages(messageList))
    })
  }
)

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    messages: [],
    status: 'idle',
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
    },
  },
})

export const { setMessages } = firebaseSlice.actions
export default firebaseSlice.reducer

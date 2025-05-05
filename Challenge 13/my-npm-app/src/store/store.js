import { configureStore } from '@reduxjs/toolkit'
import { db } from '../firebase/config'
import firebaseReducer from '../firebase/firebaseSlice'

const store = configureStore({

  reducer: {
    firebase: firebaseReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { db }, 
      },
      serializableCheck: false,
    }),
    
})

export default store
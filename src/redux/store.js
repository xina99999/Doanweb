import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slidex/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer 
  },
 
})
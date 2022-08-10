import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './slices/navslice'

const store = configureStore({
  reducer: 
  {
    nav: RootReducer,
  },
})

export default store
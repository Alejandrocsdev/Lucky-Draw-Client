// 函式庫 (library)
import { configureStore } from '@reduxjs/toolkit'
// 自訂函式 (custom function)
import piReducer from './piSlice'

const store = configureStore({
  reducer: {
    pi: piReducer
  }
})

export default store

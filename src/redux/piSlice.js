// 函式庫 (library)
import { createSlice } from '@reduxjs/toolkit'

const piSlice = createSlice({
  name: 'pi',
  initialState: { isPiBrowser: null },
  reducers: {
    setPiBrowser: (state, action) => {
      state.isPiBrowser = action.payload
    }
  }
})

export const { setPiBrowser } = piSlice.actions
export default piSlice.reducer

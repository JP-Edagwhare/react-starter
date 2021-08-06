import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItems: 0
  },
  reducers: {
    increment: state => {
      
      state.cartItems += 1
    },
    decrement: state => {
      state.cartItems -= 1
    },
    incrementByAmount: (state, action) => {
      state.cartItems += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
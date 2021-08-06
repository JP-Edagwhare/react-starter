import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../cart/cart'

function Cart() {
    const cartItem = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
   
    return (
        <div className='App'>
            <p className="para"><span>Product Name:</span><br />Galaxy Rotary Bulb</p>
            <img src="../logo192.png" alt="" /> 
            <br />
            <button className='decrease' onClick={() => dispatch(decrement())}>-</button>
            <span> {cartItem} </span>
            <button onClick={() => dispatch(increment())}>+</button>
            
        </div>
    )
}

export default Cart

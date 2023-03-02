import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem';
import { getCartThunk } from '../store/slices/cart.slice';
import '../styles/cartPage.css'
import config from '../utils/getConfig';


const CartPage = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  const {cart} = useSelector(state => state)

  const dispatch = useDispatch()

useEffect(() => {
  const result = cart?.reduce((acc, cv)=>acc+ cv.quantity * Number(cv.product.price),0)
setTotalPrice(result)
}, [cart])

const handlePurchase = () => {
const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
axios.post(url,{}, config)
.then(res=> {
  console.log(res.data)
  dispatch(getCartThunk())
})
.catch ( err=> console.log(err.response))
}


  return (
    <div className='cart__page-container'>
      <div>
        {
          cart?.map (prodInfo => (
           <CartItem
           key={prodInfo.id} 
           prodInfo={prodInfo}
           />
          ))  
        }
      </div>
      <div className='cart__page-footer'>
        <h2 className='total__title'>
          <span className='total__span'>Total:</span>
          <span className='total__span-value'>$ {totalPrice}</span>
        </h2>
        <button onClick={handlePurchase} className='buy__btn'>Buy</button>
      </div>
    </div>
  )
}

export default CartPage
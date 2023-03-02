import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import '../../styles/cartItem.css'
import config from '../../utils/getConfig'

const CartItem = ({prodInfo}) => {

  const dispatch= useDispatch()

  const handleDelete = () =>{
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)

            .then(res => {
              console.log(res.data)
            dispatch(getCartThunk())
          })

            .catch(err => console.log(err.response))
  }
  return (
    <article className='cart__item-article'>
      <header className='cart__item-header'>
        <img className='cart__item-img' src={prodInfo.product.images[0].url} alt="images_cart" />
      </header>
      <div className='cart__item-characteristc-container'>
        <h4 className='cart__item-brand'>{prodInfo.product.brand}</h4>
        <h3 className='cart__item-title'>{prodInfo.product.title}</h3>
        <ul className='cart__item-ul'>
          <li className='cart__item-price-li'>
            <span className='cart__item-price-title'>Unit Price:</span>
            <span className='cart__item-price-value'>$ {prodInfo.product.price}</span>
          </li>
          <li className='cart__item-quantity-li'>
            <span className='cart__item-quantity-title'>Quantity:</span>
            <span className='cart__item-quantity-value'>{prodInfo.quantity}</span>
          </li>
        </ul>
      </div>
      <button onClick={handleDelete} className='cart__item-btn'>
      <i className='bx bx-trash'></i>
      </button>
    </article>
  )
}

export default CartItem
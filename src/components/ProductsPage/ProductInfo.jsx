import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import '../../styles/productInfo.css'
import config from '../../utils/getConfig'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleAdd = () =>{
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if(counter-1 >= 1) {
            setCounter(counter-1)
        }     
    }

    const dispatch = useDispatch()

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: counter ,
            productId: product.id 
        }
        axios.post(url, data, config)
        .then(res =>{ 
            console.log(res.data)
            dispatch(getCartThunk())
            setCounter(1)
        })

        .catch(err => console.log(err.response))
    }

  
  return (
    <article className='product__info-article'>
        <h3 className='product__info-brand'>{product?.brand}</h3>
        <h2 className='product__info-title'>{product?.title}</h2>
        <p className='product__info-description'>{product?.description}</p>
        <footer className='product__info-footer'>
           <section className='product__info-section-1'>
            <h4 className='product__info-price'>Price</h4>
            <span className='product__info-price-value'>{product?.price}</span>
           </section>
           <section className='product__info-section-2'>
            <h4 className='product__info-quantity-title'>Quantity</h4>
            <div className='product__quantity-values'>
                <button className='btn__plus' onClick={handleMinus}>-</button>
                <div className='counter'>{counter}</div>
                <button className='btn__minus' onClick={handleAdd}>+</button>
            </div>

           </section>
           <section className='add__container'>
            <button onClick={handleAddCart} className='add__btn'>Add to cart  <i className='bx bx-cart-add'></i></button>
           </section>
        </footer>
    </article>
  )
}

export default ProductInfo
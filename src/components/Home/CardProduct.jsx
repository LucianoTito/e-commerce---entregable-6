import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import '../../styles/cardProduct.css'
import config from '../../utils/getConfig'

const CardProduct = ({product}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleClick = () =>{
        navigate(`/product/ ${product.id}`)
    }

    const handleBtnClick = e =>{
      e.stopPropagation() /* stopPropagation anula un evento de un elemento padre */
      const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
      const data = {
        quantity: 1,
        productId: product.id
      }
      axios.post(url, data, config)
      .then(res =>{ 
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err=> console.log(err.response))
    }
  return (
    
    <article className='card__product-article' onClick={handleClick}>
        <header className='card__product-header'>
            <img className='card__product-img' src={product.images[0].url} alt="image_product" />
        </header>
        {/* <hr className='card__product-divider'/> */}
        <section className='card__product-section'>
            <header>
                <h3 className='card__product-brand'>{product.brand}</h3>
                <h2 className='card__product-title'>{product.title}</h2>            
            </header>
            
            <div>
                <span className='card__product-price-title'>Price</span>
                <p  className='card__product-price-value'>{product.price}</p>
            </div>
            
        </section>
        <div className='btn__container'>
        <button onClick={handleBtnClick} className='card__product-btn'>
            <i className='bx bx-cart-add'></i>
            </button>
            </div>

    </article>
   
    
  )
}

export default CardProduct
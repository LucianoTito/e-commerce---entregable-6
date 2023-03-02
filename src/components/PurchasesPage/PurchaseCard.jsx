import React from 'react'
import '../../styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='purchease__container'>
      <header className='purchease__header'>
        <img className='purchease__img' src={purchase.product.images[2].url} alt="image__element" />
      </header>
      <section>
      <h3 className='purchease__product-title'>{purchase.product.title}</h3>
      <h4 className='purchease__quantity'>Quantity: {purchase.quantity}</h4>
      <h4 className='purchease__price'>$ {purchase.product.price}/each</h4>
      </section>
    </article>
  )
}

export default PurchaseCard
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../Home/CardProduct'
import '../../styles/similarProducts.css'

const SimilarProducts = ({category, productId}) => {
    const [filterProducts, setfilterProducts] = useState()
    const {products} = useSelector(state=>state)

  
   
    useEffect(() => {
        if (products && category) {
            setfilterProducts(products?.filter(product => product.category.id === category.id))
        }
    }, [category, products])
   

   
  return (
    <div >
        <h2 className='similar-products__title'>Discover similar products</h2>
        <div className='similar-products__container'>
            {
                filterProducts?.map(prod => {
                    if (prod.id!==productId) {
                      return  <CardProduct
                    key={prod?.id}
                    product /*hay que colocar el mismo nombre que figura en la pagina de CardProduct.jsx para que no haya problemas */={prod}
                    />
                    }
                    
                })
            }
        </div>
    </div>
  )
}

export default SimilarProducts
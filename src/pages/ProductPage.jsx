import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '.././styles/productPage.css'
import ProductInfo from '../components/ProductsPage/ProductInfo'
import SimilarProducts from '../components/ProductsPage/SimilarProducts'
import Sliderlmgs from '../components/ProductsPage/Sliderlmgs'

const ProductPage = () => {

   const {id} =  useParams()

   const [product, setProduct] = useState()

   useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(url)
    .then(res=> setProduct(res.data))
    .catch(err=>console.log(err)) 
   }, [id])
   
  return (
    <div>
      <Sliderlmgs
      product={product}/>
        <ProductInfo 
        product={product}
        />
        <SimilarProducts
        category={product?.category}
        productId= {product?.id} /*esto es para mandar el ID del producto hacia SimilarProducts.jsx */
        />
    </div>
  )
}

export default ProductPage
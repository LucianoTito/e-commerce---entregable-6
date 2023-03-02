import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice =  createSlice({
    name:'products',
    initialState:null, /*se le coloca null porque vamos a consumir una API, entonces como ocupamos encadenamiento opcional, nos permite saber si es null o undefined */
    reducers:{
      setProducts: (state, action) => action.payload
    }
 })

 export default productsSlice.reducer;

export  const {setProducts} = productsSlice.actions;
                                 /*aqui están todas las action, y a este objeto lo desestructuramos para exportarlo */

/* Se hace un thunk para hacer una petición asincrónica
 y guardar esa información de la API dentro de nuestro estado global */
export const getAllProductsThunk = () => (dispatch) => {
const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products' 
axios.get(url)
.then( res => dispatch(setProducts(res.data)))
.catch(err=> console.log(err))
}

export const getProductsByName = (text='', isCategory=false) => (dispatch) => {
let url
  if (isCategory) {
    url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${text}`
  } else {
    url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${text}`
  }
  
  axios.get(url)
  .then(res => dispatch(setProducts(res.data)))
  .catch(err=>console.log(err.response))
}
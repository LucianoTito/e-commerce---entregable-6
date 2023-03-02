import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../utils/getConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCart: (state, action) => action.payload
    }
});



export const { setCart } = cartSlice.actions

export default cartSlice.reducer

/* Se hace un thunk para hacer una petición asincrónica y guardar esa información de la API dentro de nuestro estado global */
export const getCartThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

    /* Esta config se hace antes de la llamada a axios.get(), para autorizar la petición */
  
    axios.get(url, config)
        .then(res => dispatch(setCart(res.data)))
        .catch(err => {
            console.log(err);
            /* Manejo de errores: en caso de fallo en la petición, se podría
             * despachar una acción de Redux que actualice el estado global
             * con un valor de error, o mostrar un mensaje de error al usuario,
             * o redirigir al usuario a una página de error, etc. */
        });
};


    
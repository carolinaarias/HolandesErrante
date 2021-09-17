import { createContext, useState } from "react";

export const context = createContext([]);

const {Provider} = context

const CustomProvider = ({children}) => {
   const [carrito, setCarrito]=useState([])
   
   const removeItem = (itemId) => {
      const newCarrito = carrito.filter(product => product.id !== itemId )
      setCarrito(newCarrito)
   }

   const addItem = (product,contador) => {
      if(isInCart(product.id)){
         const oldProd = isInCart(product.id)
         const cant = oldProd.cant + contador
         removeItem(product.id)
         setCarrito([...carrito,{...oldProd, cant}])
         
      }else{
         setCarrito([...carrito, product])
      }
   }

   const clear = () => {
      setCarrito([])
   }
   const isInCart = (itemId) =>{
      return carrito.find(product => product.id === itemId)
   }


   const localContext = {
      context,
      addItem,
      removeItem,
      clear
   }

return(
   <Provider value = {localContext}>
      {children}
   </Provider>
)

}
export default CustomProvider
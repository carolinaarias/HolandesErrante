import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = "https://mocki.io/v1/b781c633-6251-45cc-95ca-b3a68ef46659";
   useEffect(()=> {
      fetch(URL_API_SHOP)
      .then((respuesta)=>{
         const valor_parseado = respuesta.json();
         return valor_parseado;
      })
      .then((data)=>{
         const data_filtrada = data.filter(elementos => elementos.destacado)
         setProducts(data_filtrada)
      })
   }, []);
   return(
      <>
         <div className="item-container">
            <ItemList data={products}></ItemList>
         </div>
      </>
   )
}
export default ItemListContainer
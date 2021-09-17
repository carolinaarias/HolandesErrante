import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { context } from "../context/CartContext"
import { Link} from "react-router-dom"

const ItemDetail = ({data}) => {
   const {addItem, removeItem, clear} = useContext(context)

   const [buttonAdd,setButton] = useState('add')   

   const onAdd = (cant)=>{
      const newData = {...data, cant}
      addItem(newData,cant)
      setButton('cart')
   }
   const remove = () => {
      removeItem(data.id)
   }
   const clearAll = () => {
      clear()
   }

   return data.length === 0 ?(
      <h1>Cargando, aguarde...</h1>
   ) : (
      <li key={data.id}>
         <img src={data.img} className="img-detail"/>
         <h2>{data.nombre}</h2>
         <span>$ {data.precio}</span>
         <p>{data.descripcion}</p>
         {  
            buttonAdd === 'add' ?
            <ItemCount initial={1} data={data} onAdd={onAdd}/> 
            :
            <> <Link to={'/cart'} ><button className="btn-agregar">Ir a Carrito</button></Link>
               <Link to={'/'} ><button className="btn-agregar">Seguir comprando</button></Link>
               <button className="btn-agregar" onClick={remove}>Eliminar</button>
               <button className="btn-agregar" onClick={clearAll}>Vaciar Carrito</button>
            </>
         }
      </li>
   )
}
export default ItemDetail;
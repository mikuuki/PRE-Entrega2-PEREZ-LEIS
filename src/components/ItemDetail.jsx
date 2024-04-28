const ItemDetail = ({ producto}) => {
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.image}/>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
        </div>
    )
}
export default ItemDetail
import { useEffect, useState } from "react";

import verProductos from "../assets/productos";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";

function ItemListContainer({ saludo }) {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        verProductos
            .then((respuesta) => {
                if (idCategoria) {
                    const newProductos = respuesta.filter((producto) => producto.categoria === idCategoria)
                    setProductos(newProductos)
                } else {
                    setProductos(respuesta);
                }
            })
            .catch(error => console.error(error))
    }, [idCategoria])
    return (
        <div className="item-list-container">
            <h2 className="tittle-items"> {saludo}</h2>
            <ItemList productos={productos}/>

        </div>
    )
}
export default ItemListContainer
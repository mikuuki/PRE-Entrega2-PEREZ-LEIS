import { IoSend } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import dataWEb from "../../assets/dataweb.jpg";




import "./footer.css"
function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <div className="atencionAlCliente">
                        <h3>ATENCIÓN AL CLIENTE</h3>
                        <p>0800-123-4567 </p>
                        <p>consultas@micashop.com.ar</p>
                        <p>Whatsapp +54 11 2233-4455 </p>
                        <p>Lunes a Viernes de 9 a 14hs </p>
                    </div>
                    <div className="local">
                        <h3>UBICACIÓN</h3>
                        <p>Parque Avellaneda - <span>Capital Federal</span></p>
                        <p>Coordinar ENVÍOS o centro de PICK UP</p>
                    </div>
                </li>
                <li>
                    <div className="email">
                        <h3>SUSCRIBITE PARA MÁS PROMOS!</h3>
                        <p>Recibe descuentazos y sorteos suscribiendote con tu correo eléctronico</p>
                        <input type="text" placeholder="Escribe tu correo eléctronico" /><IoSend size="30px" className="enviar" src="#" />
                    </div>
                    <div className="rrss">
                        <FaFacebook size="30px" className="facebook" src="#"/>
                        <AiFillInstagram size="32px" className="instagram" src="#" />
                    </div>

                </li>
                <li>
                    <img src={dataWEb} className="dataWeb" alt="dataWeb" />

                </li>

            </ul>
            <p className="copyright"> Copyright 2024 - Micaela Perez Leis CODERHOUSE ReactJS</p>
        </footer>

    )
}
export default Footer
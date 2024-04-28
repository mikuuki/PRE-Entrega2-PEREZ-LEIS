import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";






function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Listado de Productos" />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Listado de Productos" />} />
        <Route path='/detail/:idProducto' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App

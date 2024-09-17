
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Product from './Pages/Product'




function App() {
  return (
    <>
    

        <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/Products" element={<Products/>}/>
          <Route path = "/Products/:productid" element={<Product/>}/>
          <Route path = "/Aboutus" element={<h1>About</h1>}/>
          <Route path = "*" element={<h1>No Pages Found. Please check the URL.</h1>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

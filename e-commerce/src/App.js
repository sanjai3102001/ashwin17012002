import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import {BrowserRouter,Routes,Route, } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Searchitem from './Components/Searchitem';
import Cart from './Components/Cart';


function App() {
  return (
   <>
 <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
  <Route path='/' element={<Product/>}></Route> 
  <Route path='/Product/:id' element={<ProductDetail/>}></Route> 
  <Route path='/search/:term' element={<Searchitem/>}></Route> 
  <Route path='/cart' element={<Cart/>}></Route> 
    </Routes>
    </BrowserRouter>
    </div>
   </>
  );
}

export default App;

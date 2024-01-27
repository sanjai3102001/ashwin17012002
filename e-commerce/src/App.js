import React from 'react';
import './App.css';
import Clothes from './Components/Clothes';
import Home from './Components/E-com';
import Watches from './Components/Watches';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Datatableuser from './Components/Datatable';


function App() {
  return (
   <>
 <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Clothes' element={<Clothes/>}></Route>
      <Route path='/Watches' element={<Watches/>}></Route>
      <Route path='/Datatable' element={<Datatableuser/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
   </>
  );
}

export default App;

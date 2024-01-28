import './App.css'
import Portal from './components/Portal';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <>
    
   
   <BrowserRouter>
    <Routes>nm
    <Route path='/' element={<Portal/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Education' element={<Education/>}></Route>
      <Route path='/Project' element={<Project/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
     </>
    
  )

}

export default App;

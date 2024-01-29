import './App.css'
import Portal from './components/Portal';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Calculator from './components/Calculator';
import AgeCal from './components/AgeCalculator';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Category from './components/Category';
import Client from './components/Client';



function App() {
  return (
    <>
    
   
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Portal/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Education' element={<Education/>}></Route>
      <Route path='/Project' element={<Project/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Calculator' element={<Calculator/>}></Route>
      <Route path='/Agecal' element={<AgeCal/>}></Route>
      <Route path='/Login' element={<LoginForm/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Category' element={<Category/>}></Route>
      <Route path='/Client' element={<Client/>}></Route>
      

      </Routes>
    </BrowserRouter>
     </>
    
  )

}

export default App;

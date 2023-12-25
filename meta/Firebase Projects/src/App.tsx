
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Home}  from './page/Home'
import { Login } from './page/Login'
import Navbar from './components/Navbar'

function App() {
  return (
   <div className=''>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} >   </Route>
      <Route path='/Login'element={<Login/>}></Route>

   
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App

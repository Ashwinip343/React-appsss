
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import NabBar from './NabBar'
import mesh from './assets/mesh.png'
function App() {
 

  return (
   <div>
  
    <BrowserRouter>
    <NabBar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
    </BrowserRouter>
  
   </div>
  )
}

export default App

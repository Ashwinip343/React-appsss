
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import frame from './assets/Frame 1 (1).png'




function App() {
  return (
   <div className='hell bg-teal-500 p-9 shadow-lg shadow-purple-500/50 rounded-2xl bg ' >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App

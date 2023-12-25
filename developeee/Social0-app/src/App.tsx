
import './App.css'
import { Home } from './main/Home'
import { Login } from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CreatePost } from './Create-post/CreatePost'

function App() {
  


  return (
   
     <div className='text-white h-auto'>
      <BrowserRouter>

      <Navbar></Navbar>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='CreatePost' element={<CreatePost/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  
  )
}

export default App

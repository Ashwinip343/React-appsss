import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route pah='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
              </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

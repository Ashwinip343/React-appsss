
import './App.css'
import { Navbar } from './components/Navbar'
import line from './assets/Line 2.png'
import { Mainu } from './components/Mainu'
import { Page } from './components/Page'
// import { Work } from './components/Work'
import { Connect } from './components/Connect'
import music from './assets/music.png'
import { Footer } from './components/Footer'
import key from './assets/keyboard.png'


function App() {
  return (
    <div>
    

   <Navbar/>
    <img src={line} className=' h-[1px] w-screen ' alt="" />

    <Mainu></Mainu>
    {/* <img src={music} alt="" className='h-[90px] ml-52 ' /> */}
   <Page></Page>
  

   
   <Connect></Connect>
   <div className=' ml-20 mt-[-100px]'><img src={key} className='h-[150px] w-[150px]' alt="" /></div>
    <Footer></Footer>
    </div>
  )
}

export default App

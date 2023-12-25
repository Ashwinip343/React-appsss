// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Cons from './components/Cons';
import apple from './assets/apple.svg'
import './App.css'
import Buttons from './components/Buttons';
import Nav from './components/Nav';

function App() {
  

  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-9 pr-9 pl-9' >
        <div className='flex flex-row '>
        <img className='p-9 pt-0' src={apple} alter="apple icon"/>
        <h1 className='mt-5'>
      
          <span className="text-black text-4xl font-bold " >Ashwini</span></h1>
      
           <Nav className="flex flex-row-reverse"/>
          
           <div className="drop-shadow-2xl">
           
           </div>
           </div>
      
      </div>
      <div className='flex w-full center'>
        <div className=' w-/1/2 h-20 shadow-md shadow-green-500/50 w-1/2 bg-green-600 ' ></div>
        <div className=' w-/1/2 h-20 shadow-md shadow-red-500/50 w-1/2 bg-red-600 ' ></div>
        <div className=' w-/1/2 h-20 shadow-md shadow-pink-500/50 w-1/2 bg-pink-400 ' ></div>
        <div></div>
      </div>
      <div className='m-4 p-9'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 font-style-mono text-3xl font-bold'> Wanna dive into<br></br> Frontend dev?</h1>

      <Buttons/>
      <Cons/>
      </div>
     
    </div>
  )
}

export default App

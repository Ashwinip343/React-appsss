import React from 'react';
import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <div>
       

        <div className='flex flex-row h-24 fixed justify-center items-center w-full bg-black '>          
                 <img src={logo} alter="Logo " className='w-9/12 hover:scale-110 duration-700 ease-in'></img>
            
        </div>
    </div>
  )
}

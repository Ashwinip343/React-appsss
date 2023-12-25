import React from 'react'
import avatar from '../assets/avatar.png'


export const Navbar = () => {
  return (
    <div className='flex justify-between h-[50px] p-3 bg-[#2f2d51]'>
        <div className='my-auto'> Lama Chat</div>
        <div className='flex flex-row  my-auto gap-2 ' >
            <img src={avatar} alt="" className='rounded-full bg-black my-auto h-[25px]'/>
            <span>Ashhhh</span>
            <button className='bg-black  px-3  my-auto text-[10px]  py-1'>Logout</button>
        </div>
    
    </div>
  )
}

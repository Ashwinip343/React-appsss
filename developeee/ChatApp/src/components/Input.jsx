import React from 'react'
import {IoMdAttach} from 'react-icons/io'
import {LuImagePlus} from 'react-icons/lu'
export const Input = () => {
  return (
    <div className='flex flex-row px-5 py-2 justify-between'>
      <input type="text" placeholder='Type Something... ' className=' text-[15px]'style={{borderBottom:'none'}} />
      
      <div className='flex flex-row gap-1'>
      <IoMdAttach className='h-[20px] w-[20px] text-gray-400 my-auto '/> 
        <input type="file" style={{display:'none'}} id='file' className='h-[50px] w-[50px] ' />      
        <label htmlFor="file" >        
        <LuImagePlus className='h-[20px] w-[20px]  text-gray-400  my-2 '/>
        </label>
        <button className='bg-blue-200 ml-3  text-[13px] px-4  rounded-lg'>send</button>

      </div>
    </div>
  )
}

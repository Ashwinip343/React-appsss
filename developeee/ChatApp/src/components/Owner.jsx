import React from 'react'
import img from '../assets/avatar.png'
export const Owner = () => {
  return (
    <div className=''>
      <div className='p-3 flex flex-row-reverse gap-4'>
      <div className='flex flex-col'>
      <img src={img} className='h-[40px] w-[40px] rounded-full bg-black ' alt="" />
      <span className='text-[12px]'>Just now</span>

      </div>
   
      <span className='mb-5 bg-[#8da4f1] p-3 text-sm rounded-lg rounded-tr-none'>hey there this is ash</span>

   
    </div>
    </div>

  )
}

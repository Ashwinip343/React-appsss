import React from 'react'
import img from '../assets/avatar.png'
export const SingleMessage = () => {
  return (
    <div className=''>
      <div className='p-3 flex flex-row gap-4'>
      <div className='flex flex-col'>
      <img src={img} className='h-[40px] w-[40px] rounded-full bg-black ' alt="" />
      <span className='text-[12px]'>Just now</span>

      </div>
   
      <span className='mb-5 bg-white p-3 text-sm rounded-lg rounded-tl-none'>hey there this is ash</span>

   
    </div>
    </div>

  )
}

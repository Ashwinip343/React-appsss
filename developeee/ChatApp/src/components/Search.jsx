import React from 'react'
import img from '../assets/avatar.png'
export const Search = () => {
  return (
    <div className=''>
        <div className='border-b-[0.5px] border-slate-500'>
            <input type="text" className='p-1 bg-transparent w-[] mx-3 my-[1px] border-none ' placeholder='Search' />
            <div></div>

        
        </div>


        <div className='userchat px-4 py-2 flex flex-row hover:bg-[#2f2d52] gap-4' > 
        <img src={img}   className='h-[40px] w-[40px] bg-white rounded-full '  alt="" />
        <div className='my-auto'>
          Jane
        </div>
        </div>

    </div>
  )
}

import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
export const Side = () => {
  return (
    <div className='w-2/5 bg-[#3e3c61]  overflow-hidden h-[90vh]'> 
        <Navbar/>
        <Search/>
    </div>
  )
}

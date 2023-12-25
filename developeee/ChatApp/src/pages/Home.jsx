import React from 'react'
import { Side } from '../components/Side'
import { Chat } from '../components/Chat'
export const Home = () => {
  return (
    <div className='bg-white bg-gray-600 text-white rounded-lg overflow-hidden' style={{height:'90vh',width:'140vh'}}>
        <div className=' flex flex-row ' >
        <Side className=''></Side>
        <Chat></Chat></div>
    </div>
  )
}

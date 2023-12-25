import React from 'react'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
import { Messages } from './Messages'
import { Input } from './Input'

import {Owner} from './Owner'


export const Chats = () => {
  return (
    <div className='flex flex-col'>
  <div className='' >
    <div className='flex flex-row justify-between h-[50px] bg-[#5d5b8d] w-[100vh] px-5 '>
      <div className='my-auto font-bold text-white'>Ashh</div>
      <div className='flex flex-row my-auto gap-3 text-[#effffa]'>
        <BsFillCameraVideoFill/>
        <FiMoreHorizontal/>       
      </div>
      </div>

    </div>
    <Messages/>
  
    <div >
    <Input/></div>
    </div>
  )
}

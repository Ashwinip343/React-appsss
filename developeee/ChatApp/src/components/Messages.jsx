import React from 'react'
import {Owner} from './Owner'
import { SingleMessage } from './SingleMessage'
export const Messages = () => {
  return (
    <div className='overflow-scroll bg-[#ddddf4] overflow-x-hidden h-[75vh] py-3'>
      <div>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        <SingleMessage/>
        
        <SingleMessage/>
        <Owner/>
        <Owner/>
        </div>
    </div>

  )
}

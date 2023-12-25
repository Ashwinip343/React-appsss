
"use client"
// import Image from 'next/image'
import Transition from '../components/Transition'
import { Moon_Dance, Ubuntu_Condensed } from 'next/font/google'
const hm=Moon_Dance({
  weight:'400',
  subsets: ['latin']
})

const Home = ()=> {
  return (
    <div className={hm.className}>
    <div className='p-20 text-[170px] flex justify-center font-bold'> 
      ABOUT PAGE
    </div></div>
  )
}
export default Transition(Home);

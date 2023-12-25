"use client";
import {motion} from 'framer-motion'
import { Moon_Dance, Ubuntu_Condensed } from 'next/font/google'
import Transition from './components/Transition';
import { AnimatePresence } from 'framer-motion';
const hm=Moon_Dance({
  weight:'400',
  subsets: ['latin']
})

const Home=()=> {
  return (
    <div  className={hm.className}> 
    

{/* <AnimatePresence mode="wait"> */}
    <motion.div className='text-[170px] flex font-bold justify-center p-20' > 
      <p className='mx-auto'> HOME PAGE </p>
     
    </motion.div>
  
    </div>

  )
}
export default Transition(Home);

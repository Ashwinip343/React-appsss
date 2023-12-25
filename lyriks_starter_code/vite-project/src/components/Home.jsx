import Image from 'next/image'

import { Moon_Dance, Ubuntu_Condensed } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
// import Transition from './components/Transition'
const hm=Moon_Dance({
  weight:'400',
  subsets: ['latin']
})

const Home=()=> {
  return (
    <div className={hm.className}> 

    <AnimatePresence mode='wait'>
    <div className='p-20 text-[170px] flex justify-center font-bold'> 
      HOME PAGE
    </div>
    </AnimatePresence>
    </div>

  )
}
export default Home();

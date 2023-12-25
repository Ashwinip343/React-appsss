'use client';

import {AnimatePresence, motion} from 'framer-motion' 
// import { useRouter } from 'next/router';

 const Transition2 = () => {
  // const Router=useRouter();
  return ()=>(

    <>
    <AnimatePresence mode='wait' >
          <motion.div
        className='fixed top-0 left-0 w-[100%] h-[100%] bg-black origin-bottom'
        // key={router.route}
        initial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1,ease:[1,0.22,1,0.36]}}
    ></motion.div> 

        
  
        </AnimatePresence>
 
    </>
    
  )
}
export default Transition2;

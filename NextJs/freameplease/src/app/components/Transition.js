'use client';

import {AnimatePresence, motion} from 'framer-motion' 
// import { useRouter } from 'next/router';
import Transition2 from './Transitionpre';

 const Transition = (Component) => {
  // const Router=useRouter();
  return ()=>(

    <>
    <AnimatePresence mode='wait' >

        {/* <Transition2/> */}

        <Component/>
        
{/*       
 <motion.div
 
 className='fixed top-0 left-0 w-[100%] h-[100%] bg-black origin-bottom'
 // key={router.route}
 initial={{scaleY:1}}
 animate={{scaleY:0}}
 exit={{scaleY:0}}
 transition={{duration:1,ease:[0.22,1,0.36,1]}}


></motion.div>  */}
        
    <motion.div  className='fixed top-0 left-0 w-[100%] h-[100%] bg-black origin-top'
        // key={Router.route}

        animate={{ y: -600 }}
        transition={{ type: "spring", stiffness: 100}}
        exit={{opacity:0}}
        // initial={{scaleY:1}}
        // animate={{scaleY:0}}
        // exit={{scaleY:0}}
        // transition={{duration:3,ease:[0.22,1,0.36,1]}}
        />
      

        </AnimatePresence>
 
    </>
    
  )
}
export default Transition;

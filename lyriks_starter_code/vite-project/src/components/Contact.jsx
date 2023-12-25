// import Image from 'next/image'
import { Moon_Dance } from 'next/font/google'
import Transition from '../components/Transition'
const hm=Moon_Dance({
  weight:'400',
  subsets: ['latin']
})
const Contact=()=>{
  return (
    <div className={hm.className}>
    <div className='p-20 text-[170px] flex justify-center font-bold'> 
      CONTACT PAGE
    </div></div>
  )
}
export default Contact() ;
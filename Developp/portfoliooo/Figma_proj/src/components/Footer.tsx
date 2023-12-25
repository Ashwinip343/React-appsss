import {TbBrandFacebook} from 'react-icons/tb'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter,FiYoutube} from 'react-icons/fi'

export const Footer = () => {
  return (
    <div> 
         <div className='flex justify-center text-white flex-row gap-20 mt-32 '>
        <div >Home</div>
        <div>About me</div>
        <div>Contact me</div>

       </div>
       <div className="flex justify-center text-white text-2xl my-10 gap-4 p-5">   
        <div className='bg-[#393E46] rounded-full p-3 hover:scale-110 ease-in '><TbBrandFacebook  /></div>
        <div className='bg-[#393E46] rounded-full p-3 hover:scale-110 ease-in '><AiOutlineInstagram/></div>
        <div className='bg-[#393E46] rounded-full p-3 hover:scale-110 ease-in '><FiTwitter/></div>
        <div className='bg-[#393E46] rounded-full p-3 hover:scale-110 ease-in '>  <FiYoutube/></div>
        
        
      

       </div>
       <h1 className='text-white text-right py-5 px-20'>Terms of Services - Privacy Policy</h1>
    </div>
  )
}

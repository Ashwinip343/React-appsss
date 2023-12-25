
import {BsFillMoonStarsFill} from 'react-icons/bs'
import './App.css'
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai' 
import img from './assets/avatar.png'
import { Image } from 'semantic-ui-react'
import car from './assets/car.png'
import hey from './assets/hey.png'
import papaya from './assets/papayaa.jpg'
import { useState } from 'react'
import ash from './assets/Ashhh.png'

function App() {
  const [darkmode, setDark] = useState(false)

  return (
    <div className={darkmode?"dark":""}>
   <div  className=' bg-white dark:text-white dark:bg-gray-900 pb-8 px-10 md:px-20 lg:px-40 '>
    <nav className='py-5 flex justify-between'>
      <h1 className='text-xl font-bold ' style={{fontFamily:'cursive'}}>DevelopedByAshhh</h1>
      <ul className='flex items-center'>
        <li><BsFillMoonStarsFill onClick={()=>setDark(!darkmode)} className='cursor-pointer text-2xl'/></li>
        <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2  shadow-lg shadow-blue-500/50 rounded-md ml-8'>Resume</a>
        </li>
      </ul>
    </nav>
    <div className='text-center p-10'>
      <img className='h-[100px] mx-auto mt-10'  src={ash}/>
      <h3 className='text-2xl  font-bold'>Developer & Designer</h3>
      <p className='text-md py-3 leading-8 text-gray-800 dark:text-gray-400'>Freelancer providing services for programming & design content. Join me down below & lets go cracking!</p>
    </div>
    <div className='text-5xl  flex flex-row justify-center gap-16 dark:text-white text-black '>
      < AiFillTwitterCircle className='hover:scale-110 duration-300 ease-in-out hover:text-blue-700' />
      <AiFillLinkedin className='hover:scale-110 duration-300 ease-in-out hover:text-blue-800'/>
      <AiFillYoutube className='hover:scale-110 duration-300 ease-in-out hover:text-red-700'/>
    </div>
    <div className='relative m-auto my-10 shadow-lg shadow-purple-500 bg-gradient-to-b from-cyan-500 overflow-hidden to-purple-500 rounded-full w-max h-max' >
      <Image layout="fill" objectFit="cover" width="250px" src={img}></Image>
     
      
    </div>
    <div className=''>
    <div className='mx-14'>
      <h3 className='text-3xl py-1 mt-10 mx-auto'>Services I offer</h3>
      <p className='py-2 text-md leading-6'>Since the beginning of my freelance journey I've done remote worked for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> & collabrated with talented people to create digital products for both business & consumer use</p>
    <p className='py-2 text-md'> I offer a wide range of services including programming & teaching </p>
    </div>
    <div className='lg:flex gap-10 text-black'>
      <div className='mx-14 lg:mx-5 bg-gradient-to-r from-teal-500 to-purple-500 text-center font-medium rounded-2xl bg-cyan-500 shadow-md shadow-black p-10 m-5'>
        <Image></Image>
        <h3 className="font-bold text-xl mb-4 font-[cursive]">Beautiful Designs</h3>
        <p>Creating elegant designs suited for your needs following core deisgn theory.</p>
        <h4 className='font-bold '>Design tools I use </h4>
        <p className='py-2 '>Photoshop</p>
        <p>Illustrator</p>
        <p>Figma</p>
      </div>

      <div className='mx-14 bg-gradient-to-r lg:mx-5 from-teal-500 to-purple-500 text-center font-medium rounded-2xl bg-cyan-500 shadow-md shadow-black p-10 m-5'>
        <Image></Image>
        <h3 className="font-bold text-xl mb-4 text-black font-[cursive]">Beautiful Designs</h3>
        <p>Creating elegant designs suited for your needs following core deisgn theory.</p>
        <h4 >Design tools I use </h4>
        <p className='py-2 '>Photoshop</p>
        <p>Illustrator</p>
        <p>Figma</p>
      </div>

      <div className='mx-14 bg-gradient-to-r lg:mx-5 from-teal-500 to-purple-500 text-center font-medium rounded-2xl bg-cyan-500 shadow-md shadow-black p-10 m-5'>
     
        <Image></Image>
        <h3 className="font-bold text-xl mb-4">Beautiful Designs</h3>
        <p>Creating elegant designs suited for your needs following core deisgn theory.</p>
        <h4>Design tools I use </h4>
        <p className='py-2 '>Photoshop</p>
        <p>Illustrator</p>
        <p>Figma</p>
      </div>

    
      </div>
      
    </div>
    <div className='mx-14'>
      <h3 className='text-3xl mt-10 py-1 mx-auto'>Portfolio</h3>
      <p className='py-2 text-md leading-6'>Since the beginning of my freelance journey I've done remote worked for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> & collabrated with talented people to create digital products for both business & consumer use</p>
    <p className='py-2 text-md'> I offer a wide range of services including programming & teaching </p>
    </div>

   <div className=' lg:flex lg:flex-row'>
    <div className='my-6 mx-14 lg:my-10 basis-1/3 flex-1 lg:mx-3 '><Image className='rounded-lg object-cover lg:h-[250px] ' height={'100%'} width={'100%'} layout="responsive" src={hey}></Image></div>
    <div className='my-6 mx-14 lg:my-10  basis-1/3 flex-1 lg:mx-3  bg-gradient-to-b from-blue-400 to-pink-800 rounded-lg'>
      <Image className=' object-cover'src={car} height={'100%'} layout="responsive"></Image>
    </div>
    <div className='my-6  mx-14 lg:my-10  basis-1/3 flex-1 lg:mx-3 '><Image   layout="responsive" className='rounded-lg object-cover lg:h-[250px] ' height={'100%'} src={papaya}></Image></div>
</div>

   </div >
   <div className='dark:bg-white dark:text-black text-white bg-gray-900 p-9'>
    <div className="text-center ">
      <h1 className='mx-auto  text-2xl font-bold'>Contact Me</h1>
      <div className='mt-10'>Drop your Email :  </div>
      <input type="text" placeholder='abc@gmail.com' className='p-3 m-3 rounded-lg shadow-sm shadow-black '/>
    
      <div>Drop your Suggestions:</div> <input type="text" placeholder='Hey , you can use Angular' className='p-3 m-3 rounded-lg shadow-sm shadow-black' /> 


      
    </div>

   </div>
  
   </div> 
  )
}

export default App

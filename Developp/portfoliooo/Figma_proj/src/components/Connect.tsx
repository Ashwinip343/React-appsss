
import get from '../assets/get.png'
export const Connect = () => {
  return (
    <div className="mt-20 mx-20 flex flex-row justify-center">
       <div className="flex flex-col text-white ">
        <h1 className="text-[60px] font-bold">Got a project in <br></br><span className="text-teal-500">mind?</span></h1>
        <img src={get}  className='h-[350px] ml-10 w-[500px]' alt="" />
       </div>
       <div className="">
        <div className='flex flex-row gap-5'>
          <div><h1 className='font-bold text-xl m-2 text-white'>Your name</h1><input type="text " className='p-3 rounded-xl text-white bg-[#393E46] font-bold' placeholder='Name' /></div>
          <div><h1 className='font-bold text-xl m-2 text-white '>Your email</h1><input type="text " className='p-3 rounded-xl text-white bg-[#393E46] font-bold' placeholder='Email' /></div>

        </div>
        <div className='mt-5 '><h1 className='font-bold text-xl m-2 text-white '>Your message</h1><input type="text" placeholder='Message ' className='p-3 rounded-xl text-white bg-[#393E46] font-bold pr-[265px] pb-[200px]' /></div>
        <button className='px-4 py-2 text-white font-bold bg-gradient-to-r from-teal-500 to-purple-500 shadow-md shadow-teal-500/50 rounded-full my-10'>Send message</button>
       </div>

      
        </div>
  )
}

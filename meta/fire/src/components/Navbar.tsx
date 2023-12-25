import {Link} from 'react-router-dom'


export const Navbar = () => {
  


  return (
    <div className=' bg-[#171717] p-3 rounded-full'>
   <div className='text-lg text-white'>
        <Link to='/Home' className=" my-5 font-bold mr-8 focus:underline" >Home</Link>
        <Link to='/Login' className="my-5 font-bold focus:underline" >Log In</Link>
     
        </div>

    </div>
  )
}

import { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [darkmode, setDark] = useState(false)

  const navigate=useNavigate()
  const [user]=useAuthState(auth)
  const signout=async()=>{
      await signOut(auth)
      navigate('/Home')
  }


  return (
    <div className={darkmode?"dark":""}>
    <div className=" flex justify-between dark:bg-gray-900 font-bold p-10  "> 
      <h1 className=' font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ' style={{fontFamily:'monospace'}}>DevelopedByAshh</h1>
       <div className='flex gap-10'>
        <div className='my-auto' ><BsFillMoonStarsFill onClick={()=>{setDark(!darkmode)}}/></div>
       {user &&(
        //bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
       
       <Link to='/CreatePost' className='px-5 w-max py-1 bg-black font-bold text-white shadow-sm shadow-purple-500/50 rounded-xl shadow-md  '>+ Create Post</Link>)}
      
       <Link to='/Home'>Home</Link>
       
       {!user && (
       <Link to='/Login'>Login</Link>)}
       <div className='flex gap-8'>
        {user &&(<>       
          <Link to='logout' onClick={signout}>Log Out</Link>
           
                 </>)}

        </div>
      </div>
        
    </div>
    </div>
  )
}

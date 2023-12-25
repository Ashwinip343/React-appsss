
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import circle from '../assets/circle.png'
import rectangle from '../assets/Rectangle 1.png'
const Login = () => {

  const navigate=useNavigate()
  const SignInWithGoogle=async ()=>{
    const result = await signInWithPopup(auth,provider)
    console.log(result)
    navigate('/')

  }

  return (
    <div >
   
    
     
      <div >
      <img src={circle} alt="circle" className='mt-9 '  width="200" height="200"/>
       

   <img src={rectangle} alt="" width="250" height="250" className='mx-20 mt-[-120px]'/>
   <button onClick={SignInWithGoogle} className='rounded-full bg-white opacity-30 text-black w-[200px] pl-5 p-3 hover:animate-bounce shadow-md shadow-black mx-auto mt-[-170px]'> <span className='text-black font-bold'>Sign In with Google</span></button>
     
            {/* <div className=" mt-[-100px] bg-gradient-to-r from-[#AC47DC] via-[#5F39CB] to-[#2BA0BA]  py-20 w-5/6 mx-20  rounded-lg " >Login

</div> */}
     </div>
      </div>

  )
}
export default Login;

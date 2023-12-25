import { signInWithPopup } from 'firebase/auth'
import { auth, provider} from '../confid/firebase'
import {useNavigate}from 'react-router-dom'
import '../assets/ohh.png'

export const Login = () => {
    const navigate=useNavigate()
    const SignIn=async()=>{
        const result=await signInWithPopup(auth,provider)
        console.log(result)
        navigate('/Home')

    }

  return (
    <div>       
                  <div className='mb-3 pt-9'>  <button onClick={SignIn} className='rounded-full shadow-md shadow-black text-black  bg-white font-bold'>Sign In with Google </button></div> 
     
            {/* <div className="container bg-origin-border bg-[url('C:\Users\patil\OneDrive\Desktop\my_react_app\meta\fire\src\assets\ohh.png')] h-96 w-96 shadow-lg mb-9 shadow-black  rounded-2xl mx-auto" >
                      </div>*/}
      
    </div>

  )
}

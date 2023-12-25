import { provider,auth} from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export const Login = () => {
    const navigate=useNavigate()
    
    const Sign=async()=>{
        const result=await signInWithPopup(auth,provider)
        console.log(result)
        navigate('/Home')
    }


  return (
    <div className="">
    <div className="flex justify-center dark:bg-black pt-[200px] pb-[340px] ">
        <div className="text-center ">
        <h1 className="text-lg">Sign in with Google to continue</h1><br/>
        <button onClick={Sign} className="px-10 py-2 m-auto rounded-full text-black bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-max shadow-lg text-blue font-bold shadow-indigo-500/50">Sign In</button>
        </div>
    </div>
  </div>
  )
}

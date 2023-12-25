import { Link } from "react-router-dom";
import {auth} from './config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";


const NabBar = () => {
  const [user]=useAuthState(auth)
    const signOutuser= async()=>{
    await signOut(auth)
  }
  return (
    <div  className="p-10 "
    >  <Link className="m-4" to='/'> Home</Link>
        
        <Link className='m-4' to='/Login'>Login</Link>
        <Link className="m-4" to='/Contact'>Contact Us </Link>
        
        {
          user&&(
        <>
        <div>{user?.displayName}</div>
          <img src={user?.photoURL||""} width="100" height="100" alt="hey" />
          <button onClick={signOutuser}>Log Out</button> </>)}
    </div>
  )
}
export default NabBar;

import {auth} from '../confid/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
export const Home = () => {
  const [user] =useAuthState(auth)
  return (
    <div className="">
      <div className='p-5'>
       
        <img className="mx-auto my-5 rounded-lg shadow-2xl" width="100px" height="100px" src={user?.photoURL || "" } alt="Img" />

        <div className="font-[cursive] text-2xl" > {user?.displayName}</div>
    </div>
    </div>
  )
}

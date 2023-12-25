import { signInWithPopup } from "firebase/auth"
import { Buttons } from "./components/Button"
import { auth, provider } from "./firebase"
import { useEffect } from "react"
import { useState } from "react"
import { Channel } from "./components/Channel"
import { db } from "./firebase"
import './App.css'
function App() {
  const [user,setUser]=useState(()=>auth.currentUser)
  const [initalizing , setInitializing]=useState(true)

 useEffect(()=>{

  const unsub=auth.onAuthStateChanged(user=>{
    if(user){
      setUser(user)
    }
    else{
      setUser(null)
    }
    if(initalizing){
      setInitializing(false)
    }
  })
  return unsub
 })

  
  const SignInwithGoogle=async()=>{
    try{
      // await signInWithPopup(auth,provider)
      signInWithPopup(auth,provider)
      // await auth.signInWithPopup(provider)
    }
    catch(error){
      console.log(error)
    }
  }

  if(initalizing) return "Loading...."

  const SignOut=async()=>{
    try{
      await auth.signOut()
      }
      catch(error){
        console.log(error.message)


      }
  }

  return (
    <div className="text-white ">

      {user ? <><Buttons onClick={SignOut} >Sign Out </Buttons> <Channel db={db}></Channel></> : <Buttons onClick={SignInwithGoogle} >Hey</Buttons> }
    
      
    </div>
  )
}

export default App

import {getDocs,collection} from 'firebase/firestore'
import { auth, db } from '../config/firebase'
import {useState,useEffect} from 'react'
import { Post } from './post'
import { useAuthState } from 'react-firebase-hooks/auth'

export interface Post{
    id:string,
    userrid:string,
    title:string,
    username:string,
    description:string,
    pic:string
}

export const Home = () => {
  const [user]=useAuthState(auth)
    const [postsLists,setPostList]=useState<Post[] | null>(null)
    const postref=collection(db,"posts")

    const getPosts = async()=>{
        const data=await getDocs(postref)
        setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id}))as Post[])
       

    }
    useEffect(() => {
      getPosts() 
     
      }, [])
    
  
  return (
    <div className=" px-40 ">
     
  
      {!user &&(
        <div className='px-60 h-screen  pt-[200px] pb-[400px] flex justify-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>A platform to share your thoughts with the world!</div>
      )}
       {user && (<>
      <div className='flex flex-row justify-center gap-4'>
        <img src={user?.photoURL||""} className='h-[50px] rounded-full  w-[50px]' alt="" />
        <div className='text-2xl text-center my-auto font-bold'>{user?.displayName}</div></div>
      <div className='flex justify-center'>
    

        <div className='p-10'>
      
        
          {postsLists?.map((post)=>
          //bg-gradient-to-r from-slate-700 via-purple-900 to-slate-500
          <div className=' shadow-sm shadow-white p-20 px-20'>      
                <Post post={post}/> </div>)}</div>
               
    </div> </>)}
    
    </div>
  )
}

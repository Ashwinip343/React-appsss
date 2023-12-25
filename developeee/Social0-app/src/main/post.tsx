import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from '../config/firebase'
import {AiFillHeart} from 'react-icons/ai'
import { addDoc,getDocs, collection,query ,where} from "firebase/firestore"
import { db } from "../config/firebase"
import { Post as Ipost } from "./Home"
import { useEffect,useState } from "react"
interface Props {
    post :Ipost,


}
interface Like{
  userId:string
}
export const Post = (props: Props) => {
    const {post} = props
    const [user]=useAuthState(auth)
    const [likes, setlikes] = useState<Like[]|null>(null)
    
    const likessRef=collection(db,"likes")
  const likesDoc=query(likessRef,where("postId",'==',post.id))
  
  const getLikes=async()=>{ 
    const data= await getDocs(likesDoc)
    setlikes(data.docs.map((doc)=>({userId:doc.data().userId})))
  }

  const addLike=async()=>{
    await addDoc(likessRef,{ 
      userId:user?.uid,
      postId: post.id


    })}

    useEffect(()=>{
      getLikes() 
    },[])
   
    
  return (
    <div className="  ">  
    <div className="font-bold text-3xl text-center  py-4">{post.title}</div>
    <p className="text-lg">{post.description}</p>
    <div className="flex flex-row text-lg mt-10 gap-5">
    <p><img src={post.pic} className="h-[50px] w-[50px] rounded-full " alt="np pic" /></p>
    <p className="my-auto">{post.username}</p>
    <button onClick={addLike} className=""><AiFillHeart/></button>
   
    </div>
    <div>
    </div>
  
    </div>
  ) 
}
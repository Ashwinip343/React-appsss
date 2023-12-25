
import {BsImageFill} from 'react-icons/bs' 
import {RiWechatChannelsLine} from 'react-icons/ri'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {doc,setDoc} from 'firebase/firestore'
import {auth,storage} from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {db} from '../firebase'
import { useState } from 'react'
export const Register = () => {
  const [err,setErr]=useState(false)



//   
//    
//   }

const onsubmit=async(data)=>{
  // console.log(data.picture[0])

  const displayname = data.Name
      const email=data.Email
      const password= data.password
      const pic= data.picture
     
      try{
        const res= await createUserWithEmailAndPassword(auth,email,password)
        const storageRef=ref(storage,displayname)
        const uploadTask=uploadBytesResumable(storageRef,pic)
  
        uploadTask.on(   
      // () => {
      //   setErr(true)
      // },

      () => {      
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateProfile(res.user,{
                  displayname,
                  photoURL:downloadURL
        })
        await setDoc(doc(db,"users",res.user.uid),{
          uid:res.user.id,
          displayname,
          email,
          photoURL:downloadURL})
      })
    }
  ) }
      catch(err){
        setErr(false)
      }
 }

  const schema=yup.object().shape({
    Name:yup.string().required("Your name is required"),
    Email:yup.string().email().required("Your email is required"),
    password:yup.string().min(4).max(20).required("Enter your password"),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Passwords don't match").required("Confirm your passowrd")

  })

  const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema),})
  
  return (
    <div className='bg-black rounded-2xl text-blacks gap-10 flex  shadow-3xl shadow-black flex-col p-10 px-20'>

    
      <div className='mx-auto text-center flex flex-row gap-5 '>
        <div>
        <RiWechatChannelsLine className='text-blue-800 h-[40px] w-[40px]' /></div>
        <div className='text-3xl font-bold text-white '>ItssAshh</div>
        
        </div>
        <div>
        <form action="" className='flex flex-col gap-2 w-[250px] text-white mb-2' onSubmit={handleSubmit(onsubmit)} >

            <input type="text"  className='p-3 border-2 border-blue-800 rounded-lg bg-black ' placeholder='Display name' {...register('Name')} />
            <p className='text-red-500'>{errors.Name?.message}</p>
            
            <input type="text" className='p-3 border-2 border-blue-800 rounded-lg bg-black' placeholder='Email' {...register('Email')} />
            <p className='text-red-500'>{errors.Email?.message}</p>

            <input type="password"  className='p-3 border-2 border-blue-800 rounded-lg bg-black ' placeholder='Password' {...register('password')}  />
            <p className='text-red-500'>{errors.password?.message}</p>
           
            <input type="password"  className='p-3 border-2 border-blue-800 rounded-lg bg-black ' placeholder='Confirm Password' {...register('confirmPassword')} />
            <p className='text-red-500'>{errors.confirmPassword?.message}</p>
           

            {/* <input type="text"  className='p-3 border-2 border-blue-800 rounded-lg bg-black ' placeholder='Password' {...register('password')} /> */}
           
            <input type="file" id='file'  style={{display:'none'}}  />
            <label htmlFor="file" >
           <div className='flex flex-row  gap-3 '>
            <BsImageFill className=' text-2xl text-blue-800 ml-2' ></BsImageFill>
             <span className='text-sm my-auto text-blue-800'>Add an image</span></div></label> 

             <input type="submit" id='submit' className='' style={{display:'none'}}/>
             <label htmlFor="submit"   className='text-white font-bold bg-gradient-to-r mt-3 from-slate-900 via-blue-800 to-slate-900 shadow-sm rounded-full py-2 mb-4 shadow-blue-800 shadow-black px-20 mx-auto' >REGISTER</label>
           

           {err && <span>Opps! , something went wrong....</span>}
        </form>
        <p className='text-white text-center mb-2'>Do you have an account? Login</p>
        
        </div>
    </div>
  )
}

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {addDoc,collection} from 'firebase/firestore'
import {auth, db} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'



interface CreateFormData{
  title:string,
  description:string,
}

export const CreateForm = () => {
  const schema =yup.object().shape({
    title:yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),

  })

  const {register,handleSubmit,formState:{errors}}= useForm<CreateFormData>({
    resolver: yupResolver(schema),
  })
  const postsRef=collection(db,"posts")
  
  const [user]=useAuthState(auth)

  const onCreate=async(data:CreateFormData)=>{
    await addDoc(postsRef,{
      ...data ,
      //object in all the fields of data , it will automatically contain title & description both
      // title: data.title,
      // description:data.description,
      username:user?.displayName,
      userrid:user?.uid,
      pic:user?.photoURL
    })
   
  }
  return (
    <div  className=" flex place-items-center justify-center rounded-2xl px-40  pt-8 pb-10 ">
        
     
      <div className='my-auto py-auto  '>
      <div className=' text-[40px] font-bold text-center rounded-lg p-9 my-auto '>Create New Post!</div>
        
       
          <form className='flex flex-col gap-4 pt-0 p-10 rounded-2xl ' onSubmit={handleSubmit(onCreate) }>
             <h1 className='font-bold'>Your Title</h1>
          <input type="text" placeholder='Title'{...register('title')} className='py-2 pl-3 pr-20 font-bold rounded-lg text-gray-900 ' />
          <p  className='text-red-500 text-lg text-center '>{errors.title?.message}</p>
          <h1 className='font-bold'>Your Description</h1>
     
          <textarea  placeholder='Description' {...register('description')} className='py-2 h-[150px] pl-3 pr-10 font-bold rounded-lg text-gray-900' />
          <p className='text-red-500 text-center text-lg'>{errors.description?.message}</p>
          <input type="submit"  className='bg-black rounded-lg  shadow-sm shadow-white px-10 py-1 mt-3 p-3' />

        </form>
    </div>
    </div>
  )
}


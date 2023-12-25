import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const Form = () => {
  
    const onsubmit=(data)=>{
        console.log(data.Email)
        
    }

    const schema =yup.object().shape({
        Name:yup.string().required("Your name is required!"),
        Email:yup.string().email().required("Your Email is required"),
        Age:yup.number("Your age is required").positive().integer().min(18).required("Your age is required"),
        password:yup.string().min(4).max(20).required("Enter your password"),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Passwords don't match").required("Confirm your passowrd")


    })

    const {register, handleSubmit,formState:{errors}}=useForm({resolver: yupResolver(schema),})

  return (
<div>
    <h2 className='m-9 text-2xl  text-bold ' style={{fontFamily:'cursive'}}>Time to fill your details here !</h2>
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onsubmit)} {...register("Name")}> 
        <input className='bg-white mx-auto p-3 text-black  w-9/12 rounded-md shadow-md shadow-black' type="text" placeholder='Name' {...register("Name")} />
        <p className='text-red-500'>{errors.Name?.message}</p>
       
        <input className='bg-white p-3 text-black mx-auto w-9/12  rounded-md shadow-md shadow-black' type="text" placeholder='Email'{...register("Email")} />
        <p className='text-red-500'>{errors.Email?.message}</p>
   
        <input className='bg-white p-3 text-black mx-auto w-9/12  rounded-md shadow-md shadow-black' type="number" placeholder='Age' {...register("Age")} />
        <p className='text-red-500'>{errors.Age?.message}</p>
   
        <input className='bg-white p-3 text-black mx-auto w-9/12  rounded-md shadow-md shadow-black' type="password" placeholder='password' {...register("password")}/>
        <p className='text-red-500'>{errors.password?.message}</p>
   
        <input className='bg-white p-3 text-black mx-auto w-9/12  rounded-md shadow-md shadow-black' type="password" placeholder='Confirm password' {...register("confirmPassword")} />
        <p className='text-red-500'>{errors.confirmPassword?.message}</p>
   
        <input className='bg-black p-3 w-60 mx-auto hover:scale-90 duration-700 ease-in shadow-black shadow-lg  rounded-md shadow-md shadow-black' type="submit" />
       
   
    </form>
    </div>
  )
}

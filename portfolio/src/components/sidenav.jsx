import { useState } from 'react';
import React from 'react';
import logo from '../assets/logo.svg'
import {ImBlog} from 'react-icons/Im';
import { AiOutlineHome, AiOutlineMenu , AiOutlineMail ,AiOutlineProject} from 'react-icons/ai';



import {BsPerson} from "react-icons/bs";
const Sidenav = () => {
    const [nav,setNav] =useState(false);
    const handleNav=()=>{
        setNav(!nav);
    };
  return ( 
    <div >
        

        
        {
            nav ? (
                
                <div className='w-9/12 fixed'>
                    <AiOutlineMenu  onClick={handleNav} size={20} className='absolute top-7 right-7 z-[99] ml-90  md-hidden text-black hover:animate-spin'></AiOutlineMenu>
                    <div className=' font-bold fixed  h-screen bg-white flex flex-col justify-center items-center '>
                        <img src={logo} className='w-9/12' alter="hey"></img>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full bg-black text-white shadow-lg shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-700 '>
                            <AiOutlineHome size={20}></AiOutlineHome>
                                <span className='pl-4'>Home</span>
                    
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full bg-black text-white  shadow-lg shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-700 '>
                            <ImBlog size={20} color='white'></ImBlog>
                                <span className='pl-4'>Blogs</span>
                    
                    
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full bg-black text-white  shadow-lg shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-700 '>
                            <AiOutlineProject size={20}></AiOutlineProject>
                                <span className='pl-4'>Projects</span>
                    
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full bg-black text-white  shadow-lg shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-700 '>
                            <BsPerson size={20}></BsPerson>
                                <span className='pl-4'>Resume</span>
                    
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full bg-black text-white  shadow-lg shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-700 '>
                            <AiOutlineMail size={20}></AiOutlineMail>
                                <span className='pl-4'>Contact</span>
                    
                        </a>
                    </div>
                </div>
            ):(
                <div> 
                    <AiOutlineMenu  onClick={handleNav } size={20} className='fixed  top-7 right-7 z-[99]  md-hidden text-white hover:animate-spin'></AiOutlineMenu>
                    <div className='flex flex-col  fixed top-[20%] ml-5'>
                        <div className='bg-black hover:shadow-lg hover:shadow-pruple-500  text-white shadow-lg shadow-black m-4 p-4 hover:scale-110 ease-in duration-200  rounded-full'><AiOutlineHome size={20}></AiOutlineHome></div>
                        <div className='bg-black text-white shadow-lg shadow-black m-4 p-4 hover:scale-110 ease-in duration-200  rounded-full' ><ImBlog size={20}></ImBlog></div>
                        <div className='bg-black text-white shadow-lg shadow-black m-4 p-4 hover:scale-110 ease-in duration-200  rounded-full'><AiOutlineProject size={20}></AiOutlineProject></div>
                        <div className='bg-black text-white shadow-lg shadow-black m-4 p-4 hover:scale-110 ease-in duration-200 rounded-full'> <BsPerson size={20}></BsPerson></div>
                        <div className='bg-black text-white shadow-lg shadow-black m-4 p-4 hover:scale-110 ease-in duration-200 rounded-full'><AiOutlineMail size={20}></AiOutlineMail></div>
                    </div>
                </div>
            )
        }
        
        </div>
  );
};
export default Sidenav; 


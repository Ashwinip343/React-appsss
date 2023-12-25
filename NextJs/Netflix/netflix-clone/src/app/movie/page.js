import React from 'react'
import Link from 'next/link';
import MovieCard from '../components/MovieCard';
const page = async () => {


  
const url = process.env.RAPID_KEY 
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a708b8711cmsh1ef1d9274178064p1fb759jsnc3fcfa70275e',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res= await fetch(url,options);

const data=await res.json();
console.log(data);
const main_data=data.titles


  return (
    <div className='flex flex-wrap p-10 gap-10'>
      {
        main_data.map((ele)=>{
          return <MovieCard key={ele.id} {...ele}/>

        })
      }
    
      
    </div>
  )
}
export default page;
import Image from 'next/image'
// import { Header } from './components/Header'
import MovieCard from './components/MovieCard'
import { Limelight, Mulish, Poppins } from 'next/font/google'

const limelight = Limelight({
  weight: '400',
  subsets: ['latin'],
})

const integrall=Mulish({
  weight: '400',
  subsets: ['latin'],

})

export default async function Home() {

  
  const url = process.env.RAPID_KEY 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a708b8711cmsh1ef1d9274178064p1fb759jsnc3fcfa70275e',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res= await fetch(url,options);
  await new Promise(resolve=>setTimeout(resolve,2000))

const data=await res.json();
console.log(data);
const main_data=data.titles

  return (
  <div className='text-white mt-[-270px]'>
       <div className={integrall.className}>
            <div className='p-20  ' >
            <span className='text-[30px]'>Welcome! <br/></span>
            <span className='text-lg font-thin'>From award winning dramas to blockbuster action movies , we&apos;ve got you covered......</span></div>
            </div>

            <div className='flex flex-wrap px-24 gap-10'>
      {
        main_data.map((ele)=>{
          return <MovieCard key={ele.id} {...ele}/>

        })
      }
    
      
    </div>

  </div>
  )
}

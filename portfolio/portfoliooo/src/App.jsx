
import circle from '../public/img/circle.png'
import img from '../public/img/img.webp'
import './App.css'

function App() {


  return (
   <div className='h-screen relative overflow-hidden  '> 
        <div  className='flex flex-row justify-between px-10 py-3 text-lg '>
            <div>Art Life</div>
            <div className='flex flex-row gap-10'>
              <h1>Art</h1>
              <h1>Painting</h1>
              <h1>Discover</h1>
            </div>

        </div>

        <div className='absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#3974ac] blur-3xl '/>
        <div className='absolute bottom-0 -right-12  w-[300px] h-[300px] bg-[#a174b6] blur-[100px]  '/>

        <div> 
          <img src={circle} alt="circle" className='absolute w-[100px] top-[140px] right-[380px] animate-spin-slow ' />
           </div>

           <section className='h-[calc(100vh-80px)] flex flex-col items-center relative'>
            <div className='absolute left-[200px] top-[40px] h-[200px] flex flex-col items-center overflow-hidden '>

              <div className='flex text-6xl font-bold text-[#e951d] drop-shadow-lg z-50'>{
                Array.from("Gallery-Art").map((letter,i)=>
                <span key={i} >{letter}</span>
                )
                }

              </div>
            </div>
            <div className='h-[500px] m-auto my-24'> 
            <img src={img} alt="art" className='object-cover text-white ' />
            </div>
            <div className='bg-[#0e0e0e] p-4 w-[300px] absolute bottom-[180px] right-[200px] drop-shadow-lg z-50 '  >
              <div className='text-sm text-justify text-[#aeaeae] font-bold '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas fuga voluptatem consectetur dolorum deleniti explicabo iure officiis aliquam ut dolor corporis laboriosam fugit, doloribus non obcaecati praesentium! Delectus, id sed?
              </div>

            </div>
           </section>

   </div>
  )
}

export default App

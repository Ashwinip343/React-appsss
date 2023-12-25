import first from '../assets/first.png'
import manu from '../assets/mainu1.png'
export const Mainu = () => {
  return (
  
    <div className="px-40 py-20  flex justify-center text-white ">
        <div className="flex flex-col">
            <div className="flex flex-row">
            <img src={manu}  className='h-[280px] mt-24 m-4' alt="" />
                <div className='flex flex-col py-10'>
               
                <h1 className="text-[80px] font-bold">CREATIVE UI</h1>
                <h1 className="text-teal-500  text-[80px] font-bold">DESIGNER</h1>
                <div className='flex flex-row gap-5 text-lg m-6 ml-10'>
                    <button className='bg-gradient-to-r from-teal-500 to-purple-500 shadow-md py-3 px-8 rounded-full shadow-teal-500/50'>Hire me</button>
                    <button className='bg-gradient-to-r from-teal-500 to-purple-500 shadow-md py-3 px-8 rounded-full shadow-teal-500/50'>Download VC</button>
                </div>
                </div>
                <img src={first} className='h-[450px]' alt="" />
            </div>
        </div>

    </div>
  )
}

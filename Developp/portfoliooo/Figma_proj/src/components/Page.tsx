
import bulb from '../assets/bulb.png'
import img from '../assets/second.png'
import arrow from '../assets/arrow.png'

export const Page = () => {
  return (
    
    <div className=" flex justify-center text-white">
     
    <div className="flex flex-col">
      
        <div className="flex flex-row px-20">
         
            <div className='flex w-[400px] flex-col m-10 mr-0 py-20'>
              <div className='flex flex-row '>
            
            <h1 className="text-[60px] font-bold">About <span className='text-teal-500'>me</span></h1>
     
            <img src={bulb} className="h-[100px] w-[100px] m-2" alt="" /></div>
           
            <div className='flex flex-row gap-10 text-lg  mb-10'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, placeat odit! Omnis deleniti quidem nobis tenetur architecto voluptates reiciendis ea! Excepturi illo eum, aspernatur similique voluptatibus distinctio accusamus recusandae commodi.</p>    </div>
                <img src={arrow} className='h-[150px] w-[150px] ml-32' alt="" />
            </div>
            <div>
            <img src={img} className='h-[700px] p-8 ' alt="" /></div>
        </div>
    </div>

</div>
    
  )
}

import Image from "next/image";
const page = async ({params}) => {


  const id=params.id


  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
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
const main_data=data[0].details

  return (
    <div className='p-40 pb-28 pt-24 mt-[-270px] flex flex-col gap-10 place-content-center '>
 
      <div className='font-bold  text-[30px] text-white'>{main_data.title}</div>
      <div className="flex flex-row">
      <Image src={main_data.backgroundImage.url} width={700} height={500} className="rounded-lg "></Image>
      <p className="font-bold text-white mx-auto my-auto p-20 w-[200] ">{main_data.synopsis } </p>
      </div>      

    </div>

  )
}
export default page;
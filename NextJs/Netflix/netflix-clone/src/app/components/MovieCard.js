import Link from "next/link";
import Image from "next/image";
const MovieCard = (ele) => {
    const {id,type,title,synopsis}=ele.jawSummary
    
  return (
    <div className="pb-4  bg-purple-500/5 hover:bg-purple-500/10 shadow-sm shadow-purple-500 w-[300px] mx-auto rounded-lg flex flex-col gap-5 transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
        <div>
            <Image src={ele.jawSummary.backgroundImage.url} className="rounded-lg " alt={title} width={350} height={200}>
            </Image>
        </div>

      
          <h1 className="text-white px-4 font-extrabold text-center">{title}</h1>
          {/* <p>{synopsis}</p> */}
          <Link href={`/movie/${id}`} className="bg-black mx-auto  rounded-full text-sm text-white font-extrabold w-fit p-2 px-4"> 
            <button >Watch now</button>
          </Link>

      

    </div>
  )
}
export default MovieCard;

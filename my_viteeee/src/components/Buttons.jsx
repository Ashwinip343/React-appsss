function Buttons(){
    return(
        <ul className="flex flex-row  m-5 mr-10 text-black text-1xl sm:text-0.5xl font-semibold ">
        <li className="mx-8"><button className = " bg-cyan-500 hover:animate-bounce  shadow-lg shadow-cyan-500/50 rounded-lg  font-mono text-black px-8 py-2 mt-5 ml-4">Start Here</button></li>
        <li className="mx-8"><button className =" transition duration-300 delay-150 hover:animate-bounce shadow-lg shadow-green-500/50 px-8 py-2 mt-5 ml-4 rounded-lg">Blogs Here</button></li>
    
    </ul>
        

    )
}
export default Buttons;

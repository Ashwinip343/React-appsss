function Nav(){
    return(
        <div className="">  
            <ul className="flex flex-row-reverse float-right flex-row m-5 mr-10 text-black text-2xl font-semibold ">
                <li className="mx-8">Home</li>
                <li className="mx-8">About</li>
                <li className="mx-8 transition duration-700 ease-in-out" >Blogs</li>
            </ul>
        </div>    )
}
export default Nav;

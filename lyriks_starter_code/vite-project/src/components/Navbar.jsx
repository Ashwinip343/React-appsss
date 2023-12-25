import { Link } from "react-router-dom";

 const Navbar = () => {
  return (
    <div className={hm.className}>
    <div className="flex flex-row justify-between p-10 font-bold text-[40px] ">
        <div >Itss Ashhh 

        </div>
    <div className="flex flex-row gap-10 ">
        <Link href={'/'}>Home</Link>
        <Link href={'/About'}>About</Link>
        <Link href={'/Contact'}>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar();

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex text-xl text-white justify-between px-20 py-10 bg-gray-900" >
      <div className="font-[cursive]">DevelopedByAshhh</div>
      <div className="flex gap-10">

        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
       
        
        </div>
    </div>
  )
}
export default Navbar;

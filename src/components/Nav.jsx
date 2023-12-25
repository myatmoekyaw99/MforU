import { MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


function Nav() {

    const [searchKey,setSearchKey] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        searchKey ? navigate(`/search/${searchKey}`)
        : alert("Enter keywords to search movie!");
    };

    return ( 
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-950 text-white py-2 border-b border-b-gray-400">
           <Link to={"/"} className="basis-1/3 text-green-600 text-3xl pl-5 font-mono font-bold">MFORU</Link>
           <div className="basis-1/3 flex items-center justify-center gap-10">
                <NavLink to={"/"} className={({isActive,isPending})=>
                    isActive ? "active" : "text-green-600"
                }
                >Popular</NavLink>

                <NavLink to={"/upcoming"} className={({isActive,isPending})=>
                    isActive ? "active" : "text-green-600"
                } 
                >Upcoming</NavLink>
           </div>
           <form className="basis-1/3 flex justify-end mr-5" onSubmit={handleSearch}>
                <input type="text" className="bg-transparent border-b border-b-green-500 focus:outline-none" placeholder="Enter keywords to search movie...."
                 onChange={(e)=> setSearchKey(e.target.value)}
                />
                <MagnifyingGlassIcon className="w-5 h-5 stroke-green-600"/>
           </form>
        </nav>
     );
}

export default Nav;
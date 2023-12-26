import { HomeIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid"
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
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-950 text-white py-2 border-b border-b-green-600">
           <Link to={"/"} className="basis-1/3 text-green-600 max-sm:pt-2 max-md:text-xl text-3xl pl-5 font-mono font-bold">MFORU</Link>
           <div className="relative basis-1/3 flex items-center justify-center max-sm:ml-2 max-[780px]:mr-2 max-[450px]:gap-2 gap-5 min-[780px]:gap-10">
                <NavLink to={"/"} className={({isActive,isPending})=>
                    isActive ? "active" : "text-green-600"
                }>
                    <HomeIcon className="max-[780px]:h-5 w-6 h-6"></HomeIcon>
                </NavLink>
                <NavLink to={"/popular"} className={({isActive,isPending})=>
                    isActive ? "active max-sm:text-base" : "text-green-600"
                }
                >Popular</NavLink>

                <NavLink to={"/upcoming"} className={({isActive,isPending})=>
                    isActive ? "active max-sm:text-base" : "text-green-600"
                } 
                >Upcoming</NavLink>
                <form id="form-2" className="w-full h-8 absolute -bottom-12 glass-bg min-[780px]:hidden" onSubmit={handleSearch}>
                    <input type="text" className="w-full rounded-full bg-transparent px-1 py-1 text-sm focus:outline-none" placeholder="Search movie..."
                    onChange={(e)=> setSearchKey(e.target.value)}
                    />
                    <MagnifyingGlassIcon className="absolute top-0 right-1 w-5 h-8 stroke-green-600"/>
                </form>
           </div>
           <form className="relative basis-1/3 flex justify-end mr-5" onSubmit={handleSearch}>
                <input type="text" className="bg-green-800 max-[780px]:hidden rounded-lg px-1 py-1 text-sm focus:outline-none shadow-inner shadow-black" placeholder="Search movie..."
                 onChange={(e)=> setSearchKey(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute top-0 right-1 w-5 h-8 stroke-white max-[780px]:hidden"/>
                {/* <MagnifyingGlassIcon className="max-sm:h-4 w-5 h-8 stroke-green-600 min-[780px]:hidden"/> */}
           </form>
           
        </nav>
     );
}

export default Nav;
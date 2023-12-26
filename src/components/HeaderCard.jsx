import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function HeaderCard({movie_data}) {

    const {id,backdrop_path,title,overview} = movie_data ;

    return ( 
        <>
        <div className="w-full h-full relative">
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className="w-full h-full"/>
        </div>
        <div className="dark-ov"></div>
        <div className="text-box">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-1 text-sm">
               {overview}
            </p>
            <Link to={`/details/${id}`} className="flex w-32 mt-2 py-2 px-2 rounded-lg bg-slate-100 text-green-600 text-sm font-semibold">
            <PlayCircleIcon className="w-5 h-5 stroke-green-600 me-1"></PlayCircleIcon>Watch Now
            </Link>
        </div>
        </>
     );
}

export default HeaderCard;
import MovieCard from "./MovieCard";
import { useEffect, useState } from 'react';
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function MovieGallery({title,url}) {

    const [pageNo,setpageNo] = useState(1);
    const total_pages = 20;

    const [popularMovie,setPopularMovie] = useState([]);
    useEffect(()=>{
        getPopularMovie();
    },[pageNo]);

    async function getPopularMovie(){
        const response = await fetch(url+`&page=${pageNo}`);
        const data =await response.json();
        setPopularMovie(data.results);
        console.log(data);
    };

    return ( 
        <section>
            <h1 className="mt-8 text-center text-green-600 text-2xl font-bold">
                <GlobeAltIcon className="w-5 h-5 inline-block mr-1 animate-spin"/>{title}<GlobeAltIcon className="w-5 h-5 ml-1 inline-block animate-spin"/>
            </h1>
            <div className="my-8 mx-10 grid grid-cols-5 items-center justify-center gap-5">
            {
                popularMovie.length && 
                popularMovie.map((movie)=>{
                  return <MovieCard key={movie.id} movie_data={movie}/>
                })
            }   
            </div>
            <div className="w-80 mx-auto mb-3 text-green-600 text-center">
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>setpageNo(1)}>First</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>pageNo === 1 ? setpageNo(1) : setpageNo(pageNo-1)}>Prev</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer text-white text-xl">{pageNo}</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>pageNo === total_pages ? setpageNo(total_pages) : setpageNo(pageNo+1)}>Next</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>setpageNo(total_pages)}>Last</span>
            </div>
        </section>
     );
}

export default MovieGallery;
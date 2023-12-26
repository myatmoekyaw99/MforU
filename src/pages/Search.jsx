import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Search() {

    const {title} = useParams();
    const [searchMovie,setSearchMovie] = useState([]);
    const [pageNo,setpageNo] = useState(1);
    const total_pages = 20;


    useEffect(()=>{
        getSearchMovie();
    },[title,pageNo]);

    const getSearchMovie = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US&query=${title}&page=${pageNo}&include_adult=false`);
        const data =await response.json();
        // console.log(data);
        setSearchMovie(data.results);
    };


    return ( 
        <section>
            <h1 className="mt-8 text-center text-white text-2xl font-bold">Search Results for "{title}"</h1>
            <div className="my-8 mx-10 grid grid-cols-5 items-center justify-center gap-5">
            {
                searchMovie.length && 
                searchMovie.map((movie)=>{
                  return <MovieCard key={movie.id} movie_data={movie}/>
                })
            }   
            </div>
            <div className="w-80 mx-auto mb-3 text-green-600 text-center">
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>setpageNo(1)}>First</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>pageNo === 1 ? setpageNo(1) : setpageNo(pageNo-1)}>Prev</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer">{pageNo}</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>pageNo === total_pages ? setpageNo(total_pages) : setpageNo(pageNo+1)}>Next</span>
                <span className="w-12 inline-block bg-black bg-clip-text font-bold hover:rounded-none rounded-lg m-1 py-1 border border-green-600 hover:cursor-pointer" onClick={()=>setpageNo(total_pages)}>Last</span>
            </div>
        </section>
     );
}

export default Search;
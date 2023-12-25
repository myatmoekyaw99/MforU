import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Search() {

    const {title} = useParams();
    const [searchMovie,setSearchMovie] = useState([]);

    useEffect(()=>{
        getSearchMovie();
    },[title]);

    const getSearchMovie = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US&query=${title}&page=1&include_adult=false`);
        const data =await response.json();
        // console.log(data);
        setSearchMovie(data.results);
    };

    return ( 
        <section>
            <h1 className="mt-8 text-center text-white text-2xl font-bold">Search Results for "{title}"</h1>
            <div className="my-8 mx-10 grid grid-cols-6 items-center justify-center gap-5">
            {
                searchMovie.length && 
                searchMovie.map((movie)=>{
                  return <MovieCard key={movie.id} movie_data={movie}/>
                })
            }   
            </div>
        </section>
     );
}

export default Search;
import MovieCard from "./MovieCard";
import { useEffect, useState } from 'react';

function MovieGallery({title,url}) {

    const [popularMovie,setPopularMovie] = useState([]);
    useEffect(()=>{
        getPopularMovie();
    },[]);

    async function getPopularMovie(){
        const response = await fetch(url);
        const data =await response.json();
        setPopularMovie(data.results);
        // console.log(data);
    };

    return ( 
        <section>
            <h1 className="mt-8 text-center text-white text-2xl font-bold">{title}</h1>
            <div className="my-8 mx-10 grid grid-cols-6 items-center justify-center gap-5">
            {
                popularMovie.length && 
                popularMovie.map((movie)=>{
                  return <MovieCard key={movie.id} movie_data={movie}/>
                })
            }   
            </div>
        </section>
     );
}

export default MovieGallery;
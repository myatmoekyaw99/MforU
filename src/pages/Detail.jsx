import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {

    const {id} = useParams();
    const [movie,setMovie] = useState({});

    useEffect(()=>{
        getMovies();
    },[id]);

    const getMovies = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US`);
        const data =await response.json();
        console.log(data);
        setMovie(data);
    }

    return ( 
        <section className="w-full flex justify-center gap-2">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
             alt={movie.title}
             className="w-[50%] h-[89vh] my-2 mx-2 rounded-lg shadow-lg shadow-black"
             />
             <div className="w-[50%] my-2 mr-2 text-white">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-[30%] h-[220px] my-3 mx-auto rounded-lg shadow-lg shadow-black"
                />
                <h1 className="text-sm"><span className="font-bold text-green-600">Movie Name - </span> {movie.title} </h1>
                <h1 className="text-sm"><span className="font-bold text-green-600">Runtime - </span> {movie.runtime} minutes</h1>
                <h1 className="text-sm"><span className="font-bold text-green-600">Release Date - </span> {movie.release_date}</h1>
                <div className="my-2 flex gap-2 text-green-600">
                Gernes -
                {
                    movie.genres && 
                    movie.genres.map((genre) =>{
                        return <span key={genre.id} className="text-green-600 font-bold text-sm px-2 py-1 bg-slate-200 hover:bg-white rounded-lg">{genre.name}</span>
                    })
                }
                </div>

                <Link to={movie.homepage} className="group flex w-32 my-4 py-2 px-2 rounded-lg bg-slate-100 text-green-600 text-sm font-semibold hover:border hover:border-white shadow-sm shadow-black">
                    <PlayCircleIcon className="w-5 h-5 stroke-green-600 me-1"></PlayCircleIcon>Watch Now
                </Link>

                <p className="mt-2 text-sm">
                    {movie.overview}
                </p>

                <h1 className="text-lg text-green-500 mt-5">"{movie.tagline}"</h1>
                
             </div>
        </section>
     );
}

export default Detail;
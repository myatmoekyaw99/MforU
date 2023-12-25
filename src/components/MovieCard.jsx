import { PlayCircleIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MovieCard({movie_data}) {

    const {id,title,poster_path} = movie_data;
    return ( 
        <Link to={`/details/${id}`} className="group relative flex flex-col mb-2 w-full h-64 text-center shadow-lg shadow-black">
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} className="w-full h-52"/>
            <PlayIcon className='w-12 h-12 absolute top-[30%] left-[40%] text-green-700 z-20 hover:cursor-pointer opacity-0 group-hover:opacity-100'></PlayIcon>
            <div className="dark-ov"></div>
            <span className='mt-1 text-green-600 font-serif text-sm'>{title}</span>
        </Link>
     );
}

export default MovieCard;
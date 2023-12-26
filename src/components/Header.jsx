import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import HeaderCard from './HeaderCard';
import { useEffect, useState } from 'react';

function Header() {

    const [top_movies,setTopMovies] = useState([]);
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies = async ()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US");
        const data =await response.json();
        // console.log(data);
        setTopMovies(data.results);
        
    }

    return ( 
        <section className="w-full border-b border-b-green-700">
            <Splide options={{
                type:'loop',
                height:400,
                autoplay:true,
            }}>

            {
                top_movies.map((movie)=>{
                    return (
                        <SplideSlide key={movie.id}>
                            <HeaderCard movie_data={movie}/>
                        </SplideSlide>
           
                    )
                })
            }
               
            </Splide>
        </section>
     );
}

export default Header;
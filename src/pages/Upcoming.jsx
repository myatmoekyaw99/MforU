import Header from "../components/Header";
import MovieGallery from "../components/MovieGallery";

function Upcoming() {
    return ( 
        <>
            <Header/>
            <MovieGallery title={"Upcoming"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US"}/>
        </>
     );
}

export default Upcoming;
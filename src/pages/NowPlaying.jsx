import Header from "../components/Header";
import MovieGallery from "../components/MovieGallery";

function NowPlaying() {
    return ( 
        <>  
            <Header/>
            <MovieGallery title={"Playing Now"} url={"https://api.themoviedb.org/3/movie/now_playing?api_key=e95f5b10a18a04a6bdcf2338f716148d&language=en-US"}/>
        </>
     );
}

export default NowPlaying;
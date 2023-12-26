import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Popular from "../pages/Popular";
import Upcoming  from "../pages/Upcoming";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import NowPlaying from "../pages/NowPlaying";

function Main() {
    return ( 
        <section>
            <Nav/>
            <Routes>
                <Route index element={<NowPlaying/>} />
                <Route path="/popular" element={<Popular/>} />
                <Route path="/upcoming" element={<Upcoming/>} />
                <Route path="/details/:id" element={<Detail/>} />
                <Route path="/search/:title" element={<Search/>} />
            </Routes>
        </section>
     );
}

export default Main;
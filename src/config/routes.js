import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import Movie from "../pages/movie";
import NotFound from "../pages/notFound";

const routes =(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
)

export default routes;
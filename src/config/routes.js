import { Route, Routes} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Movie from "../pages/movie";
import NotFound from "../pages/notFound";

const routes =(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/:id" element={<Movie/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
)

export default routes;
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Interview from "./components/Interview/Interview";
import Blog from "./components/Blog/Blog"
import Internship from "./components/Internship/Internship";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/interview/:idnumber" element={<Interview />} />
                <Route path="/internship" element={<Internship/>} />
            </Routes>
        </>
    );
}

export default App;

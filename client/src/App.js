import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Interview from "./components/Interview/Interview";
import Blog from "./components/Blog/Blog"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/interview/:idnumber" element={<Interview />} />
            </Routes>
        </>
    );
}

export default App;

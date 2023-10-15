import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Interview from "./components/Interview/Interview";
import Blog from "./components/Blog/Blog"
import Internship from "./components/Internship/Internship";

import { LanguageProvider } from "./LanguageContext";

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar isEnglish={true} />
                <Routes>
                    <Route
                        path="/:lang/internship" // Matches "/en/internship" or "/kr/internship"
                        element={<Internship />}
                    />
                    <Route
                        path="/:lang/blog" // Matches "/en/blog" or "/kr/blog"
                        element={<Blog />}
                    />
                    <Route
                        path="/:lang/interview/:idnumber" // Matches "/en/interview/:idnumber" or "/kr/interview/:idnumber"
                        element={<Interview isEnglish={true} />}
                    />
                    <Route
                        path="/:lang" // Matches "/en/" or "/kr/"
                        element={<Home />}
                    />

                </Routes>
            </LanguageProvider>
        </>
    );
}

export default App;

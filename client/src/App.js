import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Interview from "./components/Interview/Interview";
import Blog from "./components/Blog/Blog"
import Internship from "./components/Internship/Internship";
import CoffeeChat from "./components/CoffeeChat/CoffeeChat";
import Career from "./components/Career/Career";
import { LanguageProvider } from "./LanguageContext";
import { Navigate, useLocation } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment";

function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar isEnglish={true} />
                <Routes>
                {/*                 
                -------------------------------------------------
                temporary redirection from homepage to internship 
                TODO: remove
                */}
                    <Route path="/:lang" element={<Navigate to={"/" + useLocation().pathname.split('/')[1] + "/internship"} replace={true} />}/>

                {/* ------------------------------------------ */}
                    <Route 
                        path="/" 
                        element={<Navigate to="/en/" replace={true} />}
                    />
                    <Route
                        path="/:lang" // Matches "/en/" or "/kr/"
                        element={<Home />}
                    />
                    <Route
                        path="/:lang/internship" // Matches "/en/internship" or "/kr/internship"
                        element={<Internship />}
                    />
                    <Route
                        path="/:lang/blog" // Matches "/en/blog" or "/kr/blog"
                        // element={<Blog />}
                        //-----------------------------------
                        // temporary redirection, should be removed once the page is ready
                        // TODO: remove
                        element={<UnderDevelopment />}
                        //-----------------------------------
                    />
                    <Route
                        path="/:lang/interview/:idnumber" // Matches "/en/interview/:idnumber" or "/kr/interview/:idnumber"
                        // element={<Interview isEnglish={true} />}
                        //-----------------------------------
                        // temporary redirection, should be removed once the page is ready
                        // TODO: remove
                        element={<UnderDevelopment />}
                        //-----------------------------------
                    />
                    <Route
                        path="/:lang/coffee_chat" // Matches "/en/interview/:idnumber" or "/kr/interview/:idnumber"
                        // element={<CoffeeChat />}
                        //-----------------------------------
                        // temporary redirection, should be removed once the page is ready
                        // TODO: remove
                        element={<UnderDevelopment />}
                        //-----------------------------------
                    />
                    <Route
                        path="/:lang/career" // Matches "/en/interview/:idnumber" or "/kr/interview/:idnumber"
                        // element={<Career />}
                        //-----------------------------------
                        // temporary redirection, should be removed once the page is ready
                        // TODO: remove
                        element={<UnderDevelopment />}
                        //-----------------------------------
                    />
                </Routes>
            </LanguageProvider>
        </>
    );
}

export default App;

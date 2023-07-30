import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Interview from "./components/Interview/Interview";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviews/:idnumber" element={<Interview/>}/>
      </Routes>
    </>
  );
}

export default App;

import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

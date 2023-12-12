import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="max-w-[1250px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

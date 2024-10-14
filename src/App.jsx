import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Layouts/Footer/Footer";
import { Navbar } from "./Components/Layouts/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-church-gradient bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center relative  pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Service from "./pages/Service";
import Numerology from "./components/Numerology/Numerology";
import RaikiHeal from "./components/Numerology/RaikiHeal";
import Publication from "./components/Publication/Publication";
import TarrotCard from "./components/Numerology/TarrotCard";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/raikiheal" element={<RaikiHeal />} />
        <Route path="/tarrotcard" element={<TarrotCard />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

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
function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/services" element={<Service></Service>}></Route>
          <Route path="/numerology" element={<Numerology></Numerology>}></Route>
          <Route path="/raikiheal" element={<RaikiHeal></RaikiHeal>}></Route>
          {/* <Route path="/footer" element={<Footer></Footer>}>
        </Route> */}
          <Route path="/tarrotcard" element={<TarrotCard></TarrotCard>}></Route>
          <Route
            path="/publication"
            element={<Publication></Publication>}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import MyCarousel from "./components/Carousel";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Publication from "./components/Publication";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Service from "./components/Service";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyCarousel />
      <Cards />
      <Service />
      <About />
      <Testimonial />
      <Publication />
      <Footer />
    </>

  );
}

export default App;

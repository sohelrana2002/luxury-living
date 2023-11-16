import Navbar from '../../components/Navbar'
import Hero from "../../components/Hero";
import ShortDetails from "../../components/ShortDetails";
import Slider from "../../components/Slider";
import PropertyDetails from "../../components/PropertyDetails";
import PropertySpecification from "../../components/PropertySpecification";
import VideoGallery from "../../components/VideoGallery";
import ImageGallery from "../../components/ImageGallery";
import NearPlaces from "../../components/NearPlaces";
import Maps from "../../components/Maps";
import Tesimonial from "../../components/Tesimonial";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ShortDetails />
      <Slider />
      <PropertyDetails />
      <VideoGallery />
      <PropertySpecification />
      <ImageGallery />
      {/* <NearPlaces /> */}
      <Maps />
      {/* <Tesimonial /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

import { useEffect } from "react";
import Aos from "aos";
import video from "../assets/video.mp4";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding min-h-[90vh] grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mt-[10vh] py-10 md:py-0"
      id="hero"
    >
      {/* title description */}
      <div className="space-y-4" data-aos="fade-right">
        <h1 className="text-3xl md:text-5xl font-semibold hero-title text-center md:text-left">
          Your Dream <br className="hidden md:flex" /> House is{" "}
          <br className="flex md:hidden" /> Waiting{" "}
          <br className="hidden md:flex" />
          For You
        </h1>
        <p>
          Discover elegance at Cedar Gardens. Bespoke five-bedroom homes in
          Coventry's prime west enclave offer a mix of modern luxury and
          suburban tranquility. From Bosch kitchens to en-suite rooms, it's for
          those who seek the best. Experience urban connectivity with
          unmatched comfort.
        </p>
        <div>
          <h4 className="text-xl font-bold truncate">
            Broadmere Rise, Coventry, CV5 7DS
          </h4>
          <div>
            <p className="text-gray-600">Guide Price</p>
            <p className="font-bold text-lg">£395,000</p>
          </div>
        </div>

        <div>
          <Link
            className="md:px-5 px-4 bg-purple-700 text-white py-2 md:py-3 rounded font-bold"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* video */}
      <video
        // autoPlay
        loop
        controls
        controlsList="nodownload"
        className="w-full aspect-video brightness-90 rounded"
        data-aos="fade-left"
      >
        <source type="video/mp4" src={video} />
      </video>
    </section>
  );
};

export default Hero;

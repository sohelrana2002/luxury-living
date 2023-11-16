import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Maps = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section-padding">
      <h2 className="text-4xl font-bold text-center mb-10">Location</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9445898027025!2d-1.5717959237265409!3d52.407680444539785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b33dc180f87%3A0x3e82077dcb8f2800!2sBroadmere%20Rise%2C%20Coventry%2C%20UK!5e0!3m2!1sen!2sbd!4v1697127260451!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="flex-1 h-[400px] w-full rounded-xl"
          data-aos="fade-right"
        ></iframe>


        {/* near places */}
        <div
          className="flex-1 flex justify-center flex-col"
          data-aos="fade-left"
        >
          <p className="text-xl font-bold mb-2">
            Distances from major institutions
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Canley Station</p>
              <p>1.1 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Tile Hill Station</p>
              <p>1.5 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Coventry Station</p>
              <p>2.4 miles</p>
            </div>

            <div className="flex justify-between">
              <p>St John Vianney Catholic Primary School</p>
              <p>0.2 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Mount Nod Primary School</p>
              <p>0.6 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Templars Primary School</p>
              <p>0.5 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Allesley Hall Primary School</p>
              <p>0.6 miles</p>
            </div>
            
            <div className="flex justify-between">
              <p>Whoberley Hall Primary School </p>
              <p>0.9 miles</p>
            </div>
            <div className="flex justify-between">
              <p>St John's C of E Academy</p>
              <p>1.2 miles</p>
            </div>
            <div className="flex justify-between">
              <p>Park Hill Primary School</p>
              <p>1.0 mile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;

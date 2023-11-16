import { useEffect, useState } from "react";
import clsx from "clsx";
import Aos from "aos";
import Accordion from "./Accordion";
import "aos/dist/aos.css";

const PropertyDetails = () => {
  const [isOpenText, setIsOpenText] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding grid grid-cols-1 md:grid-cols-5 gap-10"
      id="about"
    >
      {/* property description */}
      <div className="md:col-span-3" data-aos="fade-up">
        <div className="space-y-5">
          <h3 className="text-3xl font-bold">Property Description</h3>
          <div
            className={clsx(
              "text-justify space-y-2",
              isOpenText ? null : "line-clamp-[18]"
            )}
          >
            <p className="font-bold text-lg">
              Exquisite Cedar Gardens Development: Exceptional Five-Bedroom
              Detached Family Homes
            </p>
            <p>
              Nestled within the sought-after western enclave of the City, Cedar
              Gardens stands as an impressive collection of eight bespoke
              five-bedroom detached family residences. Crafted with meticulous
              attention to detail and spanning three meticulously designed
              floors, these homes set a new standard for luxurious living.
              Perfectly positioned for effortless urban connections, this
              development harmoniously combines modern convenience with serene
              suburban living.
            </p>
            <p>
              Positioned in close proximity to local amenities, well-regarded
              primary and secondary schools, and seamlessly connected to the A45
              motorway network, Cedar Gardens boasts an enviable location that
              combines accessibility with tranquility.
            </p>
            <p>
              Upon entering these refined abodes, a capacious hallway welcomes
              residents, complete with convenient cloak storage and a ground
              floor W.C. The initial impression is further enriched by a
              generous front family room, providing versatile space for
              relaxation and entertainment. A standout feature of these
              exceptional homes is the exquisite kitchen/dining area,
              meticulously appointed with top-of-the-line Bosch appliances and
              adorned with sleek granite work surfaces. The kitchen's elegance
              seamlessly extends to the garden through elegant doors, offering a
              seamless blend of indoor and outdoor living.
            </p>
            <p>
              Ascending to the first floor, four generously proportioned
              bedrooms await, with one benefiting from an en-suite shower room,
              adding an extra layer of luxury and privacy. The modern family
              bathroom, outfitted with both bath and shower, adds a touch of
              sophistication to everyday living. Ascending further to the second
              floor reveals another spacious double bedroom accompanied by its
              own en-suite shower room, providing an ideal oasis for guests or
              family members.
            </p>
            <p>
              An early viewing is strongly recommended to fully grasp the
              superior craftsmanship and impeccable finishes that define these
              remarkable new builds at Cedar Gardens. This development presents
              an unparalleled opportunity for those seeking a lifestyle that
              seamlessly blends urban connectivity with the comforts of refined
              suburban living.
            </p>
            <p className="font-bold text-lg">Specification</p>
            <p>
              <span className="font-bold">General - -Oak porch</span>
              <br />
              -Oak veneer doors with polished chrome <br /> -Zoned heating to
              upper floors <br /> -Fibre broadband to premises for home working{" "}
              <br /> -CAT 5 cabling for secure networks to lounge and bedrooms{" "}
              <br /> -10 year warranty <br /> -Large storage area in loft space
            </p>
            <p>
              <span className="font-bold">
                Kitchen - -Designer magnet kitchens
              </span>{" "}
              <br />
              -Quartz worktops and under mounted sink <br /> -Integrated
              appliances <br /> -Wine rack <br /> -Hansgrohe tap <br /> -Under
              unit and LED lighting
            </p>
            <p>
              <span className="font-bold">Bathrooms - -Porcelain tiling</span>{" "}
              <br />
              -LED feature lighting <br /> -Hansgrohe tops <br /> -Wall hung
              sanitary wear
            </p>

            <p>
              <span className="font-bold">Externals - -Outside tap</span> <br />
              -Security alarm system <br /> -3kw charging point with provisions
              for 7kw <br /> -Rear outside lights <br /> -Porch lantern <br />{" "}
              -Dusk to dawn lantern
            </p>
          </div>

          <button
            onClick={() => setIsOpenText(!isOpenText)}
            className="text-purple-700"
          >
            {isOpenText ? "Read Less..." : "Read More..."}
          </button>
        </div>
      </div>

      {/* contact info */}
      <div className="md:col-span-2" data-aos="fade-down">
        <div className="boxShadow rounded-xl brightness-95">
          <img
            src="https://i.ibb.co/vcnL8VT/2.jpg"
            alt="Property Image"
            className="h-[200px] lg:h-[250px] w-full object-cover rounded-t-xl"
          />

          <div className="text-purple-700 py-2 px-5 space-y-2 bg-purple-100 ">
            <p className="font-bold text-lg">£395,000</p>
            <p>Guide Price</p>
          </div>

          <div className="p-5">
            <div className="space-y-2">
              <p className="font-bold text-lg">5 bedroom detached</p>
              <p>Broadmere Rise, Coventry, CV5 7DS</p>
            </div>

            <hr className="w-[50%] mx-auto border-[1px] border-gray-500 my-5" />

            <div className="space-y-2">
              <h4 className="text-xl font-bold truncate">
                Lee Clarke, Estate Agent, Coventry
              </h4>
              {/* <p className="truncate">
                111 New Union Street, Coventry, CV5 7DS
              </p> */}
            </div>

            <div className="bg-purple-100 px-5 py-3 rounded-2xl my-4 space-y-2">
              <p className="text-lg font-bold">
                <span className="text-purple-700">Call:</span> 07940794030
              </p>
            </div>

            {/* <Dropdown /> */}
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

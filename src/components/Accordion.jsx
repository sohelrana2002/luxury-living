import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ThankYou from "../pages/thankYou/ThankYou";
import clsx from "clsx";

const Accordion = () => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const formRef = useRef();

  const navigateTo = useNavigate();
  const fireBaseURL =
    "https://cedargardenscoventry01-default-rtdb.firebaseio.com/userDataRecords.json";

  const handleSubmit = async (event) => {
    const { fullName, email, phone } = userData;

    event.preventDefault();
    navigateTo("/submit");
    const res = fetch(fireBaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
      }),
    });
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };



  const toggleAccordion = () => {
    setIsOpenAccordion((prev) => !prev);
  };

  useEffect(() => {
    const handleOutSideForm = (e) => {
      if (!formRef.current.contains(e.target)) {
        setIsOpenAccordion(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideForm);

    return () => {
      document.removeEventListener("mousedown", handleOutSideForm);
    };
  }, []);

  const neww = () => {
    return <ThankYou />;
  };

  return (
    <div ref={formRef}>
      <button
        onClick={toggleAccordion}
        className="bg-purple-700 text-white py-2 px-5 w-full rounded-xl font-bold uppercase flex justify-between items-center"
      >
        Schedule A Viewing
        {isOpenAccordion ? (
          <IoIosArrowUp className="w-6 h-6" />
        ) : (
          <IoIosArrowDown className="w-6 h-6" />
        )}
      </button>

      <div
        className={clsx(
          "transition-height duration-300 overflow-hidden absolute left-0 right-0",
          isOpenAccordion ? "h-auto" : "h-0"
        )}
      >
        <form
          onSubmit={handleSubmit}
          action="https://send.pageclip.co/pU7J1IRulMv0rVTGX9FzcqaCLGoABD2M"
          method="POST"
          className="pageclip-form bg-white w-[90%] mx-auto p-10 rounded-xl"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              className="bg-white border border-gray-300 rounded-md p-2 w-full"
              placeholder="John Doe"
              required
              value={userData.fullName}
              onChange={postUserData}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="bg-white border border-gray-300 rounded-md p-2 w-full"
              placeholder="johndoe@example.com"
              required
              value={userData.email}
              onChange={postUserData}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              className="bg-white border border-gray-300 rounded-md p-2 w-full"
              placeholder="123-456-7890"
              required
              value={userData.phone}
              onChange={postUserData}
            />
          </div>

          <button
            type="submit"
            className="pageclip-form__submit bg-purple-700 py-2 px-5 w-full rounded-xl text-white"
          >
            Confirm Viewing
          </button>
        </form>
      </div>
    </div>
  );
};

export default Accordion;

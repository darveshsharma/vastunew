// Import the necessary modules
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Define the Second component
const Second = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      id="second"
      className=" !scroll-smooth p-6  flex flex-col md:flex-row w-full gap-5 lg:gap-10  md:py-20 lg:pt-40 bg-amber-500 "
    >
      <div className=" w-full md:w-1/2 relative lg:px-10" data-aos="fade-left">
        <div className=" overflow-hidden w-full h-full border-2">
          <img
            className=" h-52 md:h-full w-full  resize-none  object-cover"
            src="/budhas.jpg"
          />
        </div>
        <div className="absolute -right-10 -bottom-10">
          <img src="" />
        </div>
      </div>
      <div
        data-aos="fade-right"
        className=" w-full md:w-1/2  flex flex-col justify-center gap-5 lg:px-10 "
      >
        <div>
          <h2 className="text-xl">Introduction</h2>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            Welcome to HamaraGharr, your one-stop solution for all your Vastu
            needs.{" "}
          </h2>
        </div>
        <div className="gap-5 flex flex-col">
          <p className="text-wrap opacity-70">
            At HamaraGharr, we understand the importance of a harmonious space
            and its impact on your oevrall well-being. Eith our vast knowlegde
            and expertise in Vastu Shastra, we are here to provide you with
            effective solutions that will help you create a positive and
            balanced environment in your homes, offices or any other space.
          </p>
          <p className="opacity-70">
            We offer a range of products, including the Home Vastu Kit, Majestic
            Bull Photo Frame, and 7 Horses Photo Frame, designed to enhance the
            aesthetics and Vastu compliance of your home.
          </p>
        </div>
        <div>
          <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
            <a href="#our-products">Discover more </a>
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the Second component as the default export
export default Second;

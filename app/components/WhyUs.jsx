import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyUs = ({ heading, para, num }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const imageARR = ["/chair.png", "/table.png", "/almira.png", "/sofa.png"];
  return (
    <div
      data-aos="flip-left"
      className="group relative z-0 flex flex-col  overflow-hidden !items-center shadow-lg duration-500 ease-in-out transition-all gap-8 justify-center    bg-amber-300 px-5 rounded-md cursor-pointer py-36"
    >
      <div className="w-52 absolute my-auto -left-16  h-52 aspect-square  p-4 rounded-md flex justify-center items-center">
        <img src={imageARR[num]} className="h-full" />
      </div>
      {/* <div>
        <h2 className="text-xl font-bold">{heading}</h2>
      </div> */}
      {/* <div>
        <p className=" opacity-70 w-1/3">{para}</p>
      </div> */}

      <div className="absolute top-0 z-10 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-vastu bg-center bg-no-repeat bg-cover w-full h-full !duration-500 !ease-in-out !transition-all ">
        <div className="bg-black bg-opacity-60 h-full w-full absolute top-0 left-0 z-0"></div>
        <div className="flex flex-col text-white justify-center items-center z-10 px-5 gap-5">
          <h2 className="font-bold">{heading}</h2>
          <p>{para}</p>
          <button className="bg-orange-200 px-6 py-2 text-sm uppercase font-semibold text-amber-700">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

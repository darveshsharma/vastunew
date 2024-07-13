"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Step = ({ num, heading, para }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-200 gap-5 p-10 flex justify-center items-center rounded-lg"
    >
      <h3 className=" text-7xl md:text-7xl lg:text-9xl font-bold opacity-30 flex-shrink text-amber-600">
        {num}
      </h3>
      <div className="flex flex-col ">
        <h3 className="font-semibold">{heading}</h3>
        <p className="opacity-70">{para}</p>
      </div>
    </div>
  );
};

export default Step;

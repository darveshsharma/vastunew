import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Buy = () => {
  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])
  return (
    <div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="" src="/vastu.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex pt-10 border-t-2 border-solid w-full justify-between ">
          <div className="flex-grow flex flex-col">
            <h4 className="font-semibold uppercase opacity-75">Budget</h4>
            <p className="text-orange-300">$50000</p>
          </div>
          <div className="flex-grow flex flex-col">
            <h4 className="font-semibold uppercase opacity-75">Location</h4>
            <p className="text-orange-300">Bandra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;

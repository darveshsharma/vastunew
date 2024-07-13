"use client";
import { Component } from "@/components/component/NavBar";

import Image from "next/image";
import Second from "./components/Second";
import WhyUs from "./components/WhyUs";
import Step from "./components/Step";
import Footer from "./components/Footer";
import Buy from "./components/Buy";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CartUi from "./components/CartUi";
import { BULL_FRAME, HORSES, Home_Vastu_Kit } from "../lib/Constant/constant";
import { useRouter } from "next/navigation";
import positive from "@/public/whyvastu/positive.png";
import career from "@/public/whyvastu/career.png";
import improvehealth from "@/public/whyvastu/improvedhealth.png";
import finacial from "@/public/whyvastu/finacial.png";
const { createContext } = require("react");

export const productcon = createContext();

export default function Home() {
  const router = useRouter();
  const [state, setstate] = useState([
    {
      name: Home_Vastu_Kit,
      num: 0,
      price: 100,
    },
    {
      name: BULL_FRAME,
      num: 0,
      price: 200,
    },
    {
      name: HORSES,
      num: 0,
      price: 300,
    },
  ]);
  const [opencart, setopencart] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const whyuscon = [
    {
      heading: "Positive Energy Flow",
      para:
        "Vastu principles aim to ensure a smooth and positive flow of energy throughout the home.",
    },
    {
      heading: "Improved Health",
      para:
        "Properly designed spaces, according to Vastu, can support physical and mental well-being.",
    },
    {
      heading: "Financial Prosperity",
      para:
        "Vastu can align the energy of a space to attract financial opportunities and wealth",
    },
    {
      heading: "Career Success",
      para:
        "Vastu can be applied to workspaces to support career growth and success.",
    },
  ];
  useEffect(() => {
    console.log(state);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    } catch (error) {
      console.error("Error while setting token in localStorage:", error);
    }
  }, [state]);

  return (
    <productcon.Provider value={state}>
      <main className="w-full overflow-x-hidden relative ">
        <Component />
        <div
          className="bg-main bg-center mt-20 md:mt-10"
          data-aos="zoom-in-down"
        >
          <div className="bg-opacity-80 bg-black text-center flex flex-col items-center py-24">
            {/* <div className="flex flex-col flex-grow justify-around items-center p-8 md:p-16 lg:p-36 gap-5">
              <div>
                <h1 className=" text-4xl md:text5xl lg:text-8xl text-white ">
                  Hamara Gharr
                </h1>
              </div>
              <div>
                <p className="text-white">
                  Every Rich and Powerful Personality Uses Vastu For Their
                  Premises Globally
                </p>
              </div>
              <div>
                <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
                  Discover more
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap flex-grow-0 bg-white  px-16 py-12 border-b-4 border-amber-800 w-full md:w-11/12 gap-5">
              <div className="flex-grow w-full md:w-fit flex gap-5  md:flex-col lg:flex-row items-center md:justify-center">
                <img className="h-12 aspect-auto w-fit" src="/budha.png" />
                <p className="md:text-lg">
                  Elevate Your Home,
                  <br className="hidden md:block" />
                  Elevate Your Life
                </p>
              </div>
              <div className="flex-grow flex gap-5 md:border-dashed md:border-2 md:border-x-2 md:border-yellow-500 md:border-y-0  md:flex-col lg:flex-row items-center md:justify-center">
                <img className="h-12 aspect-auto w-fit" src="/ele.png" />
                <p className="md:text-lg">
                  Where Abundance Meets
                  <br className="hidden md:block" />
                  Vastu
                </p>
              </div>
              <div className="flex-grow flex gap-5 md:flex-col lg:flex-row items-center md:justify-center">
                <img className="h-12 aspect-auto w-fit" src="/om.png" />
                <p className="md:text-lg">
                  Bringing Positivity: Your
                  <br className="hidden md:block" />
                  Path To Prosperity
                </p>
              </div>
            </div> */}

            <section class="bg-transparent dark:bg-gray-900">
              <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7 text-left">
                  <h1 class="max-w-2xl mb-4 text-4xl md:text-left font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">
                    Our-Star Product Home Vastu Kit
                  </h1>
                  <p class="max-w-2xl mb-6 font-light text-white text-opacity-75 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Transform your space with our Vastu kit for prosperity,
                    health, and harmony. Tap into ancient wisdom and cosmic
                    energies today!
                  </p>
                  <a
                    onClick={() => {
                      console.log(state);
                      setstate((data) => {
                        console.log(data);
                        let newdata = data.map((item) => {
                          if (item.name == Home_Vastu_Kit) {
                            item.num += 1;
                          }
                          return item;
                        });
                        return newdata;
                      });

                      router.push("/buy");
                    }}
                    class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 cursor-pointer"
                  >
                    Buy Now
                    <svg
                      class="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#second"
                    class="scroll-smooth inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white text-opacity-50 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Explore More
                  </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                  <span className="aspect-[7/5] rounded-xl group overflow-hidden h-48 lg:h-full border-amber-500 border-2 border-solid">
                    <img
                      className="  w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
                      src="/kit.jpg"
                    />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Second />

        <div
          id="our-products"
          className="flex flex-col items-center    gap-5 py-14 bg-black "
        >
          <h1 className=" text-4xl md:text-7xl font-bold text-white ">
            Our Products
          </h1>
          <p className=" mx-10 md:mx-32 lg:mx-60 opacity-70 !font-normal text-white text-justify">
            We gather to make our commitment to become free from{" "}
            <span className="font-bold text-lg !text-center">suffering</span>,
            help people with their spiritual growth and provide a safe and
            friendly space for nurturing holistic well-being.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap flex-grow-0 bg-amber-900 gap-10 md:gap-10  py-12  w-full md:full  px-5 md:px-10 relative  bg-bg bg-cover !text-white !items-center !justify-center">
          <div className="absolute top-0 left-0 h-full w-full bg-black z-0 bg-opacity-65"></div>

          <div className="absolute top-0 left-0 h-full w-full bg-black z-0 bg-opacity-75"></div>

          <div class="max-w-sm bg-white z-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4 flex-grow">
            <a href="#">
              <img class="rounded-t-lg w-full" src="/kit.jpg" alt="" />
            </a>
            <div class="p-5 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {Home_Vastu_Kit}{" "}
                </h5>
              </a>
              <p class="mb-3 text-sm text-center font-normal text-gray-700 dark:text-gray-400">
                Unleash the ancient science of Vastu in your life and invite
                prosperity, health, and harmony with our meticulously crafted
                Vastu booklet. As an embodiment of cosmic energies, this booklet
                is designed to transform your space into a vortex of positivity,
                allowing you to harness the limitless potential of your
                surroundings.
              </p>
              <button
                href="/vastukit"
                class="!w-fit inline-flex items-center px-3 py-2 text-sm font-medium  text-white bg-amber-500 rounded-lg  focus:ring-4 focus:outline-none   dark:hover:bg-amber-500 "
                onClick={() => {
                  console.log(state);
                  setstate((data) => {
                    console.log(data);
                    let newdata = data.map((item) => {
                      if (item.name == Home_Vastu_Kit) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });

                  router.push("/vastukit");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-white z-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4 flex-grow">
            <a href="#">
              <img class="rounded-t-lg w-full" src="/bull.png" alt="" />
            </a>
            <div class="p-5 flex flex-col !items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {BULL_FRAME}{" "}
                </h5>
              </a>
              <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                As per Vastu, placing a picture of a running bull in the house
                can have many benefits, including maintaining peace and
                happiness in the family, preventing unnecessary arguments and
                grudges between family members, and depicting progress in life.
                It is believed to help eliminate mental stress, financial
                problems, and ill health.
              </p>
              <button
                href="#"
                class="!w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg focus:ring-4  dark:hover:bg-amber-500 "
                onClick={() => {
                  console.log(state);
                  setstate((data) => {
                    console.log(data);
                    let newdata = data.map((item) => {
                      if (item.name == BULL_FRAME) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });

                  router.push("/buy");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-white z-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4 flex-grow">
            <a href="#">
              <img class="rounded-t-lg w-full" src="/horse.png" alt="" />
            </a>
            <div class="p-5 flex flex-col !items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {HORSES}{" "}
                </h5>
              </a>
              <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                7 horses represent success and power; thus, this painting brings
                energy, success in one’s life, wins in their profession,
                strength, and prosperity. The picture of seven horses brings
                positivity to a person’s life and removes negative energy. It
                forms a balance of power in one’s house, and the seven horses
                represent progress and success.
              </p>
              <button
                href="#"
                class="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg  focus:ring-4  dark:hover:bg-amber-500 "
                onClick={() => {
                  console.log(state);
                  setstate((data) => {
                    console.log(data);
                    let newdata = data.map((item) => {
                      if (item.name == HORSES) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });

                  router.push("/buy");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          {/* 
          <div className="flex-grow  relative  flex justify-between flex-col   md:flex-col md:w-1/3   items-center z-10  gap-10 py-10 rounded-xl scale-90 md:scale-90  bg-white">
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="aspect-[7/5] rounded-xl group overflow-hidden h-44 lg:h-56 border-amber-500 border-2 border-solid">
                <img
                  className="  w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
                  src="/kit.jpg"
                />
              </span>
              <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
                <p className="md:text-lg text-2xl text-black font-bold ">{Home_Vastu_Kit}</p>
                <p className="text-center text-black ">
                  Unleash the ancient science of Vastu in your life and invite
                  prosperity, health, and harmony with our meticulously crafted
                  Vastu booklet. As an embodiment of cosmic energies, this
                  booklet is designed to transform your space into a vortex of
                  positivity, allowing you to harness the limitless potential of
                  your surroundings.
                </p>
              </div>
            </div>

            <div>
              <button
                className="flex items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-blue-300 bg-amber-400 text-nowrap"
                onClick={() => {
                  console.log(state);
                  setstate((data) => {
                    console.log(data);
                    let newdata = data.map((item) => {
                      if (item.name == Home_Vastu_Kit) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });

                  router.push("/buy");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-grow relative flex gap-10 md:border-solid border-opacity-10  md:border-2 md:border-x-2 md:border-black md:border-y-0  justify-between flex-col md:flex-col items-center  md:w-1/3 z-10 ">
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="aspect-[7/5] rounded-xl group overflow-hidden h-48 lg:h-60 border-amber-500 border-2 border-solid">
                <img
                  className=" w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
                  src="/bull.png"
                />
              </span>
              <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
                <p className="md:text-lg">{BULL_FRAME}​</p>
                <p className="text-center">
                  As per Vastu, placing a picture of a running bull in the house
                  can have many benefits, including maintaining peace and
                  happiness in the family, preventing unnecessary arguments and
                  grudges between family members, and depicting progress in
                  life. It is believed to help eliminate mental stress,
                  financial problems, and ill health.
                </p>
              </div>
            </div>

            <div>
              <button
                className="flex items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-blue-300 bg-amber-400 text-nowrap"
                onClick={() => {
                  setstate((data) => {
                    let newdata = data.map((item) => {
                      if (item.name == BULL_FRAME) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });
                  router.push("/buy");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-grow relative flex gap-10 flex-col  md:flex-col  items-center  md:w-1/3 z-10 justify-between scael">
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="aspect-[7/5] rounded-xl group overflow-hidden h-48 lg:h-60 border-amber-500 border-2 border-solid">
                <img
                  className="w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
                  src="/horse.png"
                />
              </span>
              <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
                <p className="md:text-lg">{HORSES}</p>
                <p className="text-center">
                  7 horses represent success and power; thus, this painting
                  brings energy, success in one’s life, wins in their
                  profession, strength, and prosperity. The picture of seven
                  horses brings positivity to a person’s life and removes
                  negative energy. It forms a balance of power in one’s house,
                  and the seven horses represent progress and success.
                </p>
              </div>
            </div>

            <div className="">
              <button
                className="flex items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-blue-300 bg-amber-400 text-nowrap"
                onClick={() => {
                  setstate((data) => {
                    let newdata = data.map((item) => {
                      if (item?.name == HORSES) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });
                  router.push("/buy");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div> */}
        </div>

        <div id="why_vastu" className=" bg-gray-200 flex flex-col">
          <div className="text-center text-5xl font-semibold pt-10">
            Why Vastu?
          </div>
          <div className="text-center opacity-70 pt-2 pb-10">
            Few reasons why Vastu really matters!
          </div>
          <div class="relative flex flex-wrap justify-center overflow-hidden bg-transparent py-6 sm:py-12 gap-8">
            <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:mx-auto sm:max-w-xs sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-amber-100 transition-all duration-300 group-hover:bg-amber-300">
                  <Image
                    src={positive}
                    alt="Image description"
                    class="h-20 w-20 transition-all"
                  />
                </span>
                <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-gray-50">
                  <p>
                    <span className="font-bold ">Positive Energy Flow </span>
                    Vastu principles aim to ensure a smooth and positive flow of
                    energy throughout the home.
                  </p>
                </div>
                {/* <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      class="text-amber-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
            <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:mx-auto sm:max-w-xs sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-amber-100 transition-all duration-300 group-hover:bg-amber-300">
                  <Image
                    src={improvehealth}
                    alt="career description"
                    class="h-20 w-20 transition-all"
                  />
                </span>
                <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-gray-50">
                  <p>
                    <span className="font-bold ">Improved Health </span>
                    Properly designed spaces, according to Vastu, can support
                    physical and mental well-being.
                  </p>
                </div>
                {/* <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      class="text-amber-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
            <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:mx-auto sm:max-w-xs sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-amber-100 transition-all duration-300 group-hover:bg-amber-300">
                  <Image
                    src={finacial}
                    alt="finacial description"
                    class="h-20 w-20 transition-all"
                  />
                </span>
                <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-gray-50">
                  <p>
                    <span className="font-bold ">Financial Prosperity </span>
                    Vastu can align the energy of a space to attract financial
                    opportunities and wealth
                  </p>
                </div>
                {/* <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      class="text-amber-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
            <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:mx-auto sm:max-w-xs sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-400 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-amber-100 transition-all duration-300 group-hover:bg-amber-300">
                  <Image
                    src={career}
                    alt="carrer description"
                    class="h-20 w-20 transition-all"
                  />
                </span>
                <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-gray-50">
                  <p>
                    <span className="font-bold ">Career Success </span>
                    Vastu can be applied to workspaces to support career growth
                    and success.
                  </p>
                </div>
                {/* <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      class="text-amber-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4	px-10  lg:px-20  py-10 bg-gray-200">
            {whyuscon.map((item, index) => (
              <WhyUs heading={item.heading} para={item.para} num={index} />
            ))}
          </div> */}
        </div>

        <div className="bg-gray-100 py-20 px-5 md:px-16 flex gap-8 flex-col">
          <div className="font-bold text-4xl">How it Works</div>
          <div className="w-full grid  md:grid-cols-3 gap-10 ">
            <Step
              num="01"
              heading={"Visit out site"}
              para={"On our website you'll find content related to Vastu"}
            />
            <Step
              num="02"
              heading={"Choose product"}
              para={
                "on our website you have multiple options to choose from , add product to cart"
              }
            />
            <Step
              num="03"
              heading={"Buy our products"}
              para={
                "You'll be redirected to Payment page then buy and explore the world of vastu"
              }
            />
          </div>
        </div>

        <div className="p-20 px-5 md:px-20 flex flex-col  gap-12">
          <div className="grid md:grid-cols-2 gap-5  md:gap-20">
            <div className="text-5xl font-bold">
              Where Designers Thrive, Creativity Flows, and Teams Grow.
            </div>
            <div className="flex flex-col  gap-5 opacity-80">
              <p>
                Velit purus enim et massa laoreet id duis magnis lobortis nisl.
                Donec eros ultrices aenean est porta dolor. Consectetuer
                consectetur sapien nascetur ullamcorper velit in eu hac auctor
                parturient platea.
              </p>
              <div>
                <button
                  onClick={() => {
                    router.push("/contact");
                  }}
                  className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Buy />
            <Buy />
            <Buy />
          </div> */}
        </div>
        <div className="bg-bulb px-5 py-20 md:p-40 relative">
          <div className="h-full w-full bg-black absolute top-0 z-0 left-0 bg-opacity-30"></div>
          <div className="flex flex-col z-10 relative justify-center items-center gap-10">
            <div>
              {" "}
              <h1 className="text-5xl text-white font-bold text-center">
                Bring Success
              </h1>
            </div>
            <div className="md:px-20 text-white opacity-85 text-center ">
              <p>
                Don’t miss this incredible opportunity to enhance your home’s
                beauty and Vastu compliance while saving big. This limited-time
                30% discount offer won’t last forever, so act quickly and take
                the first step toward a more harmonious and prosperous life.
              </p>
            </div>
            <div>
              <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
                <a href="#second">Discover more</a>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </productcon.Provider>
  );
}

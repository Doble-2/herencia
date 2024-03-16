"use client";
import Image from "next/image";
import EggAnimation from "./components/egg";
import { useSpring, animated } from "react-spring";
import Sidebar from "./components/sidebar";
import MobileSidebar from "./components/mobile-sidebar";
import { useState } from "react";

export default function Home() {
  const props = useSpring({ opacity: 1 });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-1 flex-col">
        <animated.div style={props}>
          <a onClick={toggleComponentVisibility}>
            {" "}
            <EggAnimation />
          </a>
        </animated.div>
      </div>
      {isComponentVisible ? (
        <div>
        { /* <div className=" md:hidden">
             
            <MobileSidebar
              toggleComponentVisibility={toggleComponentVisibility}
            />
          </div>*/}

          <div className=" h-full rounded-2xl flex-shrink-0 bg-ownCreme justify-self-center flex md:w-[450px] md:flex-col">
            <div className="flex h-full min-h-0 flex-col ">
              <Sidebar />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

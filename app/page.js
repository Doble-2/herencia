"use client";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Sidebar from "./components/sidebar";
import MobileSidebar from "./components/mobile-sidebar";
import { useState } from "react";
import { FormStepProvider } from "./context/step_context";
import FormStep from "./components/steps";

export default function Home() {
  const props = useSpring({ opacity: 1 });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <FormStepProvider>
      
      <FormStep />
      <div className="flex justify-center items-center w-full h-full">
        {/*isComponentVisible ? (
          <div>
            <div className=" h-full rounded-2xl flex-shrink-0 bg-ownCreme justify-self-center flex md:w-[450px] md:flex-col">
              <div className="flex h-full min-h-0 flex-col ">
                <Sidebar submit={console.log()} />
              </div>
            </div>
          </div>
        ) : null*/}
      </div>
    </FormStepProvider>
  );
}

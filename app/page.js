"use client";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Sidebar from "./components/sidebar";
import MobileSidebar from "./components/mobile-sidebar";
import { useState } from "react";
import { FormStepProvider } from "./context/step_context";
import { FormProvider } from "./context/form_context";
import FormStep from "./components/steps";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  const props = useSpring({ opacity: 1 });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <FormStepProvider>
      <FormProvider>
        
        <Navbar />
        <div className="flex  flex-col  bg-ownLightBlue  items-center justify-between bg-cover bg-center bg-no-repeat bg-[url('../public/nubesfondo.svg')]">
          <div className="flex min-h-screen min-w-full	mx-auto items-center justify-center">
            <div className="absolute min-h-screen min-w-full z-20">
              <Image
                className=" w-screen  max-h-[400px] object-cover	object-bottom	"
                src={"CONJUNTO DE NUBES SUPERIOR .svg"}
                alt="Two snowmen"
                width="130"
                height="90"
              />
            </div>
            <div className="z-40">
            <FormStep />
            </div>
           
            <div className="absolute min-h-screen min-w-full h-full flex items-end z-20">
              <Image
                className=" w-screen max-h-[30%] object-cover	object-top	"
                src={"CONJUNTO DE NUBES INFERIOS.svg"}
                alt="Two snowmen"
                width="130"
                height="90"
              />
            </div>
          </div>
          <Footer />
        </div>
     
           
      </FormProvider>
    </FormStepProvider>
  );
}

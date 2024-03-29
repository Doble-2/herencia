import React, { useState } from "react";
import EggAnimation from "./../components/egg";
import { useFormStep } from "../hooks/use-form-step";
import Image from "next/image";

export function StepHello() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const { handleNextStep, handlePreviousStep } = useFormStep();

  return (
    <div className="">
      <div className="flex flex-row items-center">
        <div class="basis-1/2 relative md:flex items-center justify-center hidden">
          <div className="pb-16 absolute self-start">
            <Image
              src={"PATITO.svg"}
              alt="Two snowmen"
              width="130"
              height="250"
            />
          </div>
          <div className="mb-8 absolute">
            <Image
              src={"Papas1.svg"}
              alt="Two snowmen"
              width="300"
              height="350"
            />
          </div>
        </div>
        <div class="md:basis-1/2 z-40 flex items-center flex-col">
          <p className="text-center text-white mb-8 font-extrabold px-5">
            ¡Hola! Soy Born y cuando estaba en la barriga de mi mamá, mis padres
            tenían miedo de cómo sería mi condición genética, así que decidieron
            crear esta app y descubrieron que sería un patito muy lindo y
            totalmente sano. Con esta app puedes planificar tu embarazo con más
            tranquilidad así como lo hicieron mis papás
          </p>
          <button onClick={handleNextStep} class="bg-ownOrange  font-bold py-2 px-4 rounded">
            Empezar
          </button>
        </div>
      </div>
    </div>
  );
}

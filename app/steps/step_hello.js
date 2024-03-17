import React,{useState} from "react";
import { useSpring, animated } from "react-spring";
import EggAnimation from "./../components/egg";
import { useFormStep } from "../hooks/use-form-step";

export  function StepHello() {
    const props = useSpring({ opacity: 1 });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const { handleNextStep, handlePreviousStep } = useFormStep()

  return (
    <div className="pr-44	pl-44	 py-12">
    <div className="flex flex-row items-center">
      
      <div class="basis-1/2"><img
        src="../img/PATITO.svg"
        alt="Two snowmen"
        className="mb-8"
        width="300"
        height="200"
        
        
      /></div>
      <div class="basis-1/2">
      <p className="text-center text-black mb-8 text-[#fff] ">
        ¡Hola! Soy Bory y cuando estaba en la barriga de mi mamá, mis padres tenían miedo de que sería mi condición
        genética, así que decidieron crear esta app y descubrieron que sería un patito feliz y sano y tu también
        puedes serlo. Con esta app puedes planificar tu embarazo con más tranquilidad así como lo hicieron mis
        papás.
      </p>
      </div>
    </div>
    <button onClick={handlePreviousStep}>prev</button>
    <button onClick={handleNextStep}>sig</button>
  </div>
  );
};


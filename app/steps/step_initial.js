import React,{useState} from "react";
import EggAnimation from "./../components/egg";
import { useFormStep } from "../hooks/use-form-step";

export  function StepInitial() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const { handleNextStep, handlePreviousStep } = useFormStep()
  return (
    <div>
      <div className="flex flex-1 flex-col">
        <div >
          <a onClick={handleNextStep}>
            {" "}
            <EggAnimation />
          </a>
        </div>
      </div>
    </div>
  );
};


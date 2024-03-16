import React,{useState} from "react";
import { useSpring, animated } from "react-spring";
import EggAnimation from "./../components/egg";
import { useFormStep } from "../hooks/use-form-step";

export  function StepInitial() {
    const props = useSpring({ opacity: 1 });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const { handleNextStep, handlePreviousStep } = useFormStep()
  return (
    <div>
      <div className="flex flex-1 flex-col">
        <animated.div style={props}>
          <a onClick={handleNextStep}>
            {" "}
            <EggAnimation />
          </a>
        </animated.div>
      </div>
    </div>
  );
};


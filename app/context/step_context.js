import { createContext, useEffect, useState } from 'react';


export const FormStepContext = createContext({
  currentStep: 1,
  steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
  moveToStep: () => {},
} );



export const FormStepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: 'initial', number: 1 },
    { title: 'hello', number: 2 },
    { title: 'form', number: 3 },
    { title: 'result', number: 4 },
  ])




  const handleNextStep = () => {
    console.log(currentStep);
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
    };
    console.log(currentStep);
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
    }
  };

  const moveToStep = (step) => {
    setCurrentStep(step);
  }

  return (
    <FormStepContext.Provider value={{ steps, currentStep, handleNextStep, handlePreviousStep, moveToStep }}>
      {children}
    </FormStepContext.Provider>
  );
};

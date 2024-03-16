import { useFormStep } from "../hooks/use-form-step";

import { StepInitial } from "../steps/step_initial";
import { StepHello } from "../steps/step_hello";
import { StepForm } from "../steps/step_form";
/*import { Plans } from "./Plans";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";*/

const steps = [
  {
    step: 1,
    component: StepInitial,
  },
  {
    step: 2,
    component: StepHello,
  },
  {
    step: 3,
    component: StepForm,
  },
  {
    step: 4,
    component: StepHello,
  },
];

export default function FormStep() {
  const { currentStep } = useFormStep();
  const step = steps.find(({ step }) => step === currentStep);

  return (
    <div className="flex flex-col justify-between">
      {step && step.component()}
    </div>
  );
}

import { useContext } from "react";
import { FormContext } from "../context/form_context";

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  return context;
};
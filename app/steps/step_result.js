import React, { useState, useEffect } from "react";
import EggAnimation from "./../components/egg";
import { useForm } from "../hooks/use-form";
import{ fetchData} from './../../lib/request_openai';
import { useFormStep } from "../hooks/use-form-step";

export  function StepResult() {
  const { handleNextStep, handlePreviousStep } = useFormStep();

    const { parentsData, setParentsData } = useForm();
    const [response, setResponse] = useState(null);

  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const selectedModel = {
      name: "Default (GPT-3.5)",
      id: "gpt-3.5-turbo",
      available: true,
    };
   
  
  fetchData( parentsData, selectedModel, setResponse, setIsLoading)
  }, [parentsData]);


  return (
    <div>
      <div className="flex flex-1 flex-col">
        {IsLoading == true ? (
          <div>
            <div>
              <a  className="font-bold">
                {"Cargando..."}
                <EggAnimation />
              </a>
            </div>
          </div>
        ) : <div className="p-6 bg-ownCreme overflow-auto max-h-[60vh]  max-w-sm mx-auto rounded-xl shadow-md flex-col flex items-center space-x-4">
       
          <div className="text-xl font-medium">Futuro Hijo</div>
          
          <p className="self-start">Rasgos:</p>
          {response && Object.entries(response.futuro_hijo.rasgos).map(([key, value]) => (
            <div className="self-start" key={key}>
               <p  >{key}:
               {Object.entries(value).map(([subKey, subValue]) => (
            <span key={subKey}>{subKey} {JSON.stringify(subValue)}% ; </span>
            ))}

            </p>
            </div>
           
          ))}
          <p className="self-start">Predisposición a enfermedades:</p>
          {response && Object.entries(response.futuro_hijo.predisposicion_enfermedades).map(([key, value]) => (
            <div key={key} className="self-start">
              <p>{key}:</p>
              <p>Probabilidad: {value.probabilidad}%</p>
              <p>Explicación: {value.explicacion}</p>
              <p>Recomendaciones: {value.recomendaciones}</p>
            </div>
          ))}
       
      </div>}
      </div>
    </div>
  );
}

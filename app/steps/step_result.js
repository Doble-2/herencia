import React, { useState, useEffect } from "react";
import EggAnimation from "./../components/egg";
import { useForm } from "../hooks/use-form";
import{ fetchData} from './../../lib/request_openai';

export  function StepResult() {
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
            loading{" "}
            <div>
              <a >
                {"Cargando..."}
                <EggAnimation />
              </a>
            </div>
          </div>
        ) : <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">Futuro Hijo</div>
          <p className="text-gray-500">Rasgos:</p>
          {response && Object.entries(response.futuro_hijo.rasgos).map(([key, value]) => (
            <p key={key}>{key}: {JSON.stringify(value)}</p>
          ))}
          <p className="text-gray-500">Predisposición a enfermedades:</p>
          {response && Object.entries(response.futuro_hijo.predisposicion_enfermedades).map(([key, value]) => (
            <div key={key}>
              <p>{key}:</p>
              <p>Probabilidad: {value.probabilidad}%</p>
              <p>Explicación: {value.explicacion}</p>
              <p>Recomendaciones: {value.recomendaciones}</p>
            </div>
          ))}
        </div>
      </div>}
      </div>
    </div>
  );
}

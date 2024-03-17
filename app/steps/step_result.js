import React, { useState, useEffect } from "react";
import EggAnimation from "./../components/egg";
import { useForm } from "../hooks/use-form";
import{ fetchData} from './../../lib/request_openai';

export  function StepResult() {
    const { parentsData, setParentsData } = useForm();
    const [response, setResponse] = useState(null);

  const [IsLoading, setIsLoading] = useState(true);
  const selectedModel = {
    name: "Default (GPT-3.5)",
    id: "gpt-3.5-turbo",
    available: true,
  };
 

  useEffect(() => {
   
  fetchData( parentsData, selectedModel, setResponse, setIsLoading)
  }, [parentsData,selectedModel]);


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
        ) : response}
      </div>
    </div>
  );
}

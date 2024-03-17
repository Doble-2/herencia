import { createContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

export const FormContext = createContext({
  parentsData: [],
  setParentsData: () => {},
  clearForm: () => {}
});

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

function handleFormState(
  state,
  action
) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: ''
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      }
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        hasError: false
      }
    default:
      return state
  }
}


export const FormProvider = ({ children }) => {
  const [parentsData, setParentsData] = 
    useState({
        abuelo_paterno: {
          enfermedades: [],
          rasgos: {
           
          },
        },
        abuela_paterna: {
          enfermedades:[],
          rasgos: {
            
          },
        },
        padre: {
          enfermedades: [],
          rasgos: {
           
          },
        },
        abuelo_materno: {
          enfermedades:[],
          rasgos: {
           
          },
        },
        abuela_materna: {
          enfermedades: [],
          rasgos: {
           
          },
        },
        madre: {
          enfermedades: [],
          rasgos: {
            
          },
        },
        // Agrega aquí los demás parientes con la misma estructura...
      });
 

  const { getValueFromLocalStorage, removeValueFromLocalStorage } = useLocalStorage()

  function clearForm() {
    removeValueFromLocalStorage('parentsData')
    setParentsData([])
  }

  useEffect(() => {
    const parentsDataFromLocalStorage = getValueFromLocalStorage('parentsData')
    if (parentsDataFromLocalStorage) {
        setParentsData(parentsDataFromLocalStorage)
    }
  }, [])

  const value = {
    parentsData,
    setParentsData,
    clearForm
  }

  return (
    <FormContext.Provider value={{ ...value }}>
      {children}
    </FormContext.Provider>
  );
};

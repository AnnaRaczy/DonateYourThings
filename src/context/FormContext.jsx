import { createContext, useContext, useEffect, useState } from "react";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
} from "../components/Home/DonateSteps";

const FormContext = createContext();

const useContextForm = () => {
  return useContext(FormContext);
};

const defaultValues = {
  things: [],
  bags: "",
  location: "",
  groups: "",
  customGroups: "",
  street: "",
  city: "",
  code: "",
  phone: "",
  date: "",
  hour: "",
  message: "",
};
const DataProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(defaultValues);
  const [step, setStep] = useState(1);

  console.log("currentState:", currentState);

  const setComponent = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;
    }
  };

  const value = {
    currentState,
    setCurrentState,
    step,
    setStep,
    setComponent,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { useContextForm, DataProvider };

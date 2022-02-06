import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";

const StepForm = () => {
  const { step, setStep, currentState, setCurrentState } = useContextForm();

  const { handleSubmit } = useForm({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (!currentState.things.includes(value)) {
      setCurrentState((prevState) => ({
        things: [...prevState.things, value],
      }));
      return currentState;
    } else {
      setCurrentState((prevState) => ({
        things: [prevState.things.filter((val) => val !== value)],
      }));
    }
  };

  const onSubmit = (data) => {
    setStep((prevState) => prevState + 1);
    console.log(data);
  };

  return (
    <form id="things" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="donate_steps--form">
        <FormControlLabel
          control={<Checkbox />}
          label="Clothes in good condition"
          value={"Clothes in good condition"}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          value={"Clothes for recycling"}
          label="Clothes for recycling"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          value={"Toys"}
          onChange={handleChange}
          label="Toys"
        />
        <FormControlLabel
          control={<Checkbox />}
          value={"Books"}
          onChange={handleChange}
          label="Books"
        />
        <FormControlLabel
          control={<Checkbox />}
          value={"Other"}
          onChange={handleChange}
          label="Other"
        />
      </FormGroup>
    </form>
  );
};

export { StepForm };

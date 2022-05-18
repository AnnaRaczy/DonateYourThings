import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { Error } from "./DonateSteps";

const StepForm = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const [error, setError] = useState(false);

  const { handleSubmit } = useForm({ defaultChecked: currentState.things });

  const opts = [
    "Clothes in good condition",
    "Clothes for recycling",
    "Toys",
    "Books",
    "Other",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setError(false);

    if (!currentState.things.includes(value)) {
      setCurrentState((prevState) => ({
        ...currentState,
        things: [...prevState.things, value],
      }));
      return currentState;
    } else {
      setCurrentState(() => ({
        ...currentState,
        things: [...currentState.things.filter((val) => val !== value)],
      }));
      return currentState;
    }
  };

  const onSubmit = () => {
    if (currentState.things.length !== 0) {
      setStep((prevState) => prevState + 1);
    }
    setError(true);
  };

  return (
    <form id="things" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="donate_steps--form">
        <FormControlLabel
          control={<Checkbox />}
          label="Clothes in good condition"
          value={opts[0]}
          onChange={handleChange}
          checked={currentState.things.includes(opts[0]) ? true : false}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Clothes for recycling"
          value={opts[1]}
          onChange={handleChange}
          checked={currentState.things.includes(opts[1]) ? true : false}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Toys"
          value={opts[2]}
          onChange={handleChange}
          checked={currentState.things.includes(opts[2]) ? true : false}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Books"
          value={opts[3]}
          onChange={handleChange}
          checked={currentState.things.includes(opts[3]) ? true : false}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Other"
          value={opts[4]}
          onChange={handleChange}
          checked={currentState.things.includes(opts[4]) ? true : false}
        />
      </FormGroup>
      <Error error={error} text="Please choose at least one option" />
    </form>
  );
};

export { StepForm };

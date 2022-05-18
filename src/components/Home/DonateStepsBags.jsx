import React, { useState } from "react";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Error } from "./DonateSteps";

const SelectForm = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [error, setError] = useState(false);
  const arr = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    e.preventDefault();
    setError(false);
    const { value, name } = e.target;
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const { bags } = currentState;
    if (bags) setStep((prevState) => prevState + 1);
    setError(true);
  };
  return (
    <form
      id="bag"
      onSubmit={handleSubmit(onSubmit)}
      className="donate_bags--wrapper"
    >
      <FormControl variant="outlined" size="small" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name="bags"
          label="bags"
          value={currentState.bags}
          onChange={handleChange}
        >
          {arr.map((val, id) => (
            <MenuItem value={val} key={id}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Error error={error} text="Please choose an option" />
    </form>
  );
};

const StepSelect = () => {
  return (
    <div>
      <SelectForm />
    </div>
  );
};

export { StepSelect };
